import React, {useState} from 'react'
import axios from 'axios'
import { Container, TextField, Button, Box, Grid, Typography } from '@mui/material'

export default function Signup({ history }) {

  // 회원가입 폼
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    nickname: ''
  })

  // 폼 입력
  const onInput = (event) => {
    const { id, value } = event.target
    setForm({
      ...form,
      [id]: value,
    })
  }

  // "회원가입" 버튼
  const onSignup = (event) => {
    event.preventDefault()
    console.log(form)
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 2000,
      method: 'POST',
      url: '/accounts/signup',
      data: form
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // "뒤로" 버튼
  const onBack = (event) => {
    console.log(history)
    history.goBack()
  }

  return (
    <Container component="main" maxWidth="md" sx={{
      display: "flex",
      flexGrow: 1,
    }}>
      <Box
        mt={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography component='h1' variant='h5' align='left'>
          회원가입
        </Typography>
        <Box component="form"
          sx={{mt: 3}}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                id="username"
                value={form.username}
                onChange={onInput}
                label="아이디"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch" sx={{display: "flex"}}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="primary"
                variant="outlined"
                
                >중복확인</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                type="password"
                value={form.password}
                onChange={onInput}
                label="비밀번호"
                fullWidth
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="passwordConfirm"
                type="password"
                value={form.passwordConfirm}
                onChange={onInput}
                label="비밀번호 확인"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                id="email"
                type="email"
                value={form.email}
                onChange={onInput}
                label="이메일"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4} alignItems="stretch" sx={{display: "flex"}}>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="outlined"
                >이메일 인증</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="nickname"
                value={form.nickname}
                onChange={onInput}
                label="닉네임"
                fullWidth
                />
            </Grid>

            

            <Grid item xs={12} alignItems="stretch" mt={5} sx={{display: "flex"}}>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                onClick={onSignup}
              >회원가입</Button>
            </Grid>
            <Grid item xs={12}  alignItems="stretch" sx={{display: "flex"}}>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                onClick={onBack}
              >뒤로</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
