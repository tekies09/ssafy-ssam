import {useCallback, useState} from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import axios from 'axios'
import Close from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Grid, Box, Link } from '@mui/material'

import NewSnackbar from '../NewSnackbar'

function Login(props) {
  const open = useSelector((state) => state.modal.login)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("info")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
    
  const handleClose = function () {
    dispatch({type: "closeLoginModal"})
  }
  
  const handleUsernameInput = function (event) {
    setUsername(event.target.value)
    setUsernameError("")
  }
  
  const handlePasswordInput = function (event) {
    setPassword(event.target.value)
    setPasswordError("")
  }
  
  const handleSignup = function () {
    navigate("/signup")
    dispatch({type: "closeLoginModal"})
  }

  const validate = (form) => {
    const {username, password} = form

    if (username === "") {
      setUsernameError("사용자 이름을 입력하세요.")
      return false
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.")
      return false
    }

    return true
  }
  
  const handleLogin = function () {
    const isValid = validate({username:username, password:password})
    if (isValid) {
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
        localStorage.setItem("token", token)
        
        // 토큰 풀어서 사용자 정보 저장
        const payload = JSON.parse(atob(token.split('.')[1]))
        dispatch({type: 'login', payload: payload})
      })
      .then(() => {
        dispatch({type: "closeLoginModal"})
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            setMessage("사용자 정보가 존재하지 않습니다.")
            
          } else if (error.response.data.result) {
            setMessage(error.response.data.result)
  
          } else {
            setMessage(error.message)
          }
        }
        setSeverity("error")
        setSnackbarOpen(true)
        console.log(error)
      })
    }
  }
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 3}}>
        로그인
        <IconButton edge='end' onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 20,
            top: 20}}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          '& .MuiTextField-root': {my: 1},
          'justifyContent': 'center'
        }}
      >
        <TextField required fullWidth
          id="username"
          label="아이디"
          value={username}
          onChange={handleUsernameInput}
          error={usernameError!==""}
          helperText={usernameError}
          />
        <TextField required fullWidth
          id="password"
          type="password"
          label="비밀번호"
          value={password}
          onChange={handlePasswordInput}
          error={passwordError!==""}
          helperText={passwordError}
        />
      </DialogContent>
      <Box
        sx={{
          'mx': 2,
          '& .MuiButton-root': {borderRadius: 20}
        }}
      >
        <DialogActions>
            <Button fullWidth
              onClick={handleSignup}
              variant="outlined"
            >
              회원가입
            </Button>
        </DialogActions>
        <DialogActions>
          <Button fullWidth
            type="submit"
            onClick={handleLogin}
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
      <NewSnackbar open={snackbarOpen} setOpen={setSnackbarOpen} message={message} severity={severity} />
    </Dialog>
  )
}

export default Login