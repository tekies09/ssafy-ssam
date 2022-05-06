import React, {useState} from 'react'
import axios from 'axios'
import { Container, TextField, Button, Box, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()

  // 회원가입 폼
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    nickname: ''
  })

  // 폼 Validation 상태
  const [errors, setErrors] = useState({
    username: [false, ''],
    password: [false, ''],
    passwordConfirm: [false, ''],
    email: [false, ''],
    nickname: [false, ''],
  })

  // 폼 입력
  const onInput = (event) => {
    const { id, value } = event.target
    setForm({
      ...form,
      [id]: value,
    })
    setErrors({
      ...errors,
      [id]: [false, ''],
    })
  }

  // Validation
  const validate = (form) => {
    const required = ['username', 'password', 'passwordConfirm', 'email', 'nickname']
    let isValid = true

    // 빈값 체크
    required.forEach(field => {
      if (form[field] === '') {
        setErrors((errors) => ({...errors, [field]: [true, '잘못된 이메일입니다.']}))
        isValid = false
      }
    })

    // 이메일 주소 형식 체크
    if (form.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      setErrors((errors) => ({...errors, email: [true, '잘못된 이메일입니다.']}))
      isValid = false
    }

    // 비밀번호 확인 체크
    if (form.password !== form.passwordConfirm) {
      setErrors((errors) => ({...errors, passwordConfirm: [true, '비밀번호가 일치하지 않습니다.']}))
    }

    return isValid
  }

  // "회원가입" 버튼
  const onSignup = (event) => {
    event.preventDefault()
    console.log(form)
    console.log(errors)
    const isValid = validate(form)
    if (isValid) {
      axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        timeout: 3000,
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
  }

  // "뒤로" 버튼
  const onBack = (event) => {
    navigate(-1)
  }

  return (
    <Container component="main" maxWidth="md" sx={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Box mt={5}
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
                error={errors.username[0]}
                helperText={errors.username[1]}
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
                error={errors.password[0]}
                helperText={errors.password[1]}
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
                error={errors.passwordConfirm[0]}
                helperText={errors.passwordConfirm[1]}
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
                error={errors.email[0]}
                helperText={errors.email[1]}
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
                error={errors.nickname[0]}
                helperText={errors.nickname[1]}
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
