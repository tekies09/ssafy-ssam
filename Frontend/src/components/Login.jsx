import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Link, Grid } from '@mui/material'
function Login(props) {

  const {open, setOpen} = props;
  
  const handleClose = function () {
    // Login Modal 닫기
    setOpen(false)
  }

  const handleLogin = function () {
    // 로그인 부분 구현하기
    console.log('login')
  }
  
  return (
    <>
    <Dialog onClose={handleClose} open={open}>

      <DialogTitle>로그인</DialogTitle>
      <DialogContent
        sx={{
          '& .MuiTextField-root': {m: 1}
        }}
      >
        <TextField
          required
          id="username"
          label="아이디"
          fullWidth
          />
        <TextField
          required
          id="password"
          type="password"
          label="비밀번호"
          fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          fullWidth
          variant="outlined"
        >
          닫기
        </Button>
        <Button
          type="submit"
          onClick={handleLogin}
          fullWidth
          variant="contained"
        >
          로그인
        </Button>
        
        
      </DialogActions>
      <DialogActions>
        <Link href="#">
          아직 계정이 없으신가요? 회원가입하기
        </Link>
    
      </DialogActions>
      <DialogActions>
    
        <Link href="#">
          계정을 잃어버리셨나요? 아이디 찾기
        </Link>
      </DialogActions>
      
    </Dialog>
    </>
  )
}

export default Login