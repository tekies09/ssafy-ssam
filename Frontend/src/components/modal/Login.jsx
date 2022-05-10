import {useCallback, useState} from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import axios from 'axios'
import Close from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Grid, Box, Link } from '@mui/material'
function Login(props) {

  // const open = useSelector((state) => state.modal.login)
  const {open, setOpen} = props;
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
    
  const handleClose = function () {
    setOpen(false)
  }

  const handleUsernameInput = function (event) {
    setUsername(event.target.value)
  }

  const handlePasswordInput = function (event) {
    setPassword(event.target.value)
  }

  const handleSignup = function () {
    navigate("/signup")
    setOpen(false)
  }

  const handleLogin = function () {
    
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: 'POST',
      url: 'user/login',
      data: {
        'username': username,
        'password': password
      }
    })
    .then(response => {
      const token = response.data.message
      // 토큰 저장
      localStorage.setItem("token", token)

      // 토큰 풀어서 사용자 정보 저장
      const payload = JSON.parse(atob(token.split('.')[1]))
      dispatch({type: 'login', payload: payload})
      // modal 닫기
      setOpen(false)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  return (
    <>
    <Dialog onClose={handleClose} open={open}>

      <DialogTitle sx={{ m: 0, p: 3}}>로그인
      <IconButton edge='end' onClick={handleClose} sx={{position: 'absolute', right: 20, top: 20}}>
        <Close />
      </IconButton>
        
      </DialogTitle>
      <DialogContent
        sx={{
          '& .MuiTextField-root': {my: 1},
          'justifyContent': 'center'
        }}
      >
        <TextField
          required
          id="username"
          label="아이디"
          value={username}
          fullWidth
          onChange={handleUsernameInput}
          />
        <TextField
          required
          id="password"
          type="password"
          label="비밀번호"
          value={password}
          onChange={handlePasswordInput}
          fullWidth
          />
      </DialogContent>
      <Box sx={{
        'mx': 2,
        '& .MuiButton-root': {borderRadius: 20}
      }}>
        <DialogActions>
            <Button
              onClick={handleSignup}
              fullWidth
              variant="outlined"
            >
              회원가입
            </Button>
        </DialogActions>
        <DialogActions>
          <Button
            type="submit"
            onClick={handleLogin}
            fullWidth
            variant="contained"
          >
            로그인
          </Button>
        </DialogActions>
        <DialogActions sx={{'mb': 2}}>
          <Link to="#">
            계정을 잃어버리셨나요? 아이디/비밀번호 찾기
          </Link>
        </DialogActions>
      </Box>
      
    </Dialog>
    </>
  )
}

export default Login