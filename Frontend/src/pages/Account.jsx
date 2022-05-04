import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import axios from 'axios'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material'
import Close from '@mui/icons-material/Close'

const ChangeNickname = (props) => {
  const user = props.user
  const [input, setInput] = useState(user.nickname)
  
  const handleNicknameButton = (event) => {
    event.preventDefault()
    console.log(input)

    // console.log들은 snackbar, alert 등으로 바꿀 것
    if (input === user.nickname) {
      console.log('동일한 닉네임입니다.')
      return
    }

    if (input === '') {
      console.log('올바르지 않은 닉네임입니다.')
      return
    }

    const newuser = {...user, nickname: input}
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      headers: {
        'Authentication': ''
      },
      url: '',
      method: 'PUT',
      data: newuser
    })
    .then(response => {
      console.log('닉네임이 변경되었습니다.')
      // 페이지 재로드
    })
    .catch(error => {
      console.log('닉네임 변경에 실패했습니다.')
      console.log(error)
    })
  }
    
  return (<Box textAlign='start' m={3}>
  <h3>닉네임 변경</h3>
  <p>새로 사용할 닉네임을 작성해주세요.</p>
  <Box textAlign='center' sx={{whiteSpace: 'nowrap'}}>
    <TextField value={input} onChange={(event) => setInput(event.target.value)}  sx={{mr: 1}} size='small' />
    <Button variant='contained' sx={{}} onClick={handleNicknameButton}>
      변경
    </Button>
  </Box>
  </Box>)  
}


const SignOut = (props) => {
  const [open, setOpen] = useState(false)

  return (<Box textAlign='start' m={3}>
    <h3>회원 탈퇴</h3>
    <Box textAlign='center'>
      <Button variant='contained' onClick={() => {setOpen(true)}}>회원 탈퇴</Button>
    </Box>
    <SignOutModal open={open} setOpen={setOpen} />
  </Box>)
}

const SignOutModal = (props) => {

  return (<Dialog open={props.open}>
    <DialogTitle>회원탈퇴</DialogTitle>
    <IconButton edge='end' onClick={() => {props.setOpen(false)}} sx={{position: 'absolute', right: 20, top: 20}}>
      <Close />
    </IconButton>
    <DialogContent>
      <p>SSAM에서 탈퇴하시면 더 이상 SSAM이 제공하는 야구 데이터 분석 / 시뮬레이션 정보를 이용하실 수 없습니다. 정말로 탈퇴하시겠습니까?</p>
      <DialogActions>
        <Button fullWidth variant="contained">
          탈퇴
        </Button>
      </DialogActions>
      <DialogActions>
        <Button onClick={() => {props.setOpen(false)}} variant="contained" fullWidth color="secondary">
          취소
        </Button>
      </DialogActions>
    </DialogContent>
  </Dialog>)
}

export default function Account() {
  const user = useSelector((state) => state.user)
  
  useEffect(() => {
    if (user.isLoggedIn === false) {
      // 비로그인 사용자 처리
    }
    

  })

  return (
    <>
      <h1>회원 정보</h1>
      <ChangeNickname user={user} />
      <Divider sx={{my: 3}} />
      <SignOut />
    </>
  )
}
