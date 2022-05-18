import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, Typography } from '@mui/material'
import MyteamSummary from '../components/MyteamSummary'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const testTeams = [
  {
    id: 1,
    name: "테스트용 나만의 팀 1",
    members: [
      {id: 12345, ord: 1, pos: "2B", name: "김갑돌", year: "2020"},
      {id: 12347, ord: 2, pos: "SS", name: "김납돌", year: "2020"},
      {id: 23456, ord: 3, pos: "LF", name: "김답돌", year: "2020"},
      {id: 23442, ord: 4, pos: "DH", name: "김랍돌", year: "2020"},
      {id: 23313, ord: 5, pos: "1B", name: "김맙돌", year: "2020"},
      {id: 26562, ord: 6, pos: "CF", name: "김밥돌", year: "2020"},
      {id: 54356, ord: 7, pos: "RF", name: "김삽돌", year: "2020"},
      {id: 45754, ord: 8, pos: "3B", name: "김압돌", year: "2020"},
      {id: 45755, ord: 9, pos: "C", name: "김잡돌", year: "2020"},
      {id: 95733, ord: 10, pos: "P", name: "김찹돌", year: "2020"},
    ]
  },
  {
    id: 2,
    name: "테스트용 나만의 팀 2",
    members: [
      {id: 12345, ord: 1, pos: "2B", name: "김갑돌", year: "2020"},
      {id: 12347, ord: 2, pos: "SS", name: "김납돌", year: "2020"},
      {id: 23456, ord: 3, pos: "LF", name: "김답돌", year: "2020"},
      {id: 23442, ord: 4, pos: "DH", name: "김랍돌", year: "2020"},
      {id: 23313, ord: 5, pos: "1B", name: "김맙돌", year: "2020"},
      {id: 26562, ord: 6, pos: "CF", name: "김밥돌", year: "2020"},
      {id: 54356, ord: 7, pos: "RF", name: "김삽돌", year: "2020"},
      {id: 45754, ord: 8, pos: "3B", name: "김압돌", year: "2020"},
      {id: 45755, ord: 9, pos: "C", name: "김잡돌", year: "2020"},
      {id: 95733, ord: 10, pos: "P", name: "김찹돌", year: "2020"},
    ]
  },
]

export default function MyTeamlist() {
  const [teams, setTeams] = useState([testTeams])
  const user = useSelector((state) => state.user)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn === false) {
      alert("나만의 팀 기능을 이용하려면 로그인해야 합니다.")
      navigate("/")
      console.log("go")
      return
    }

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `myteam/userTeamList/${user.userid}`,
      timeout: 3000,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      setTeams(response.data.myTeamList)
    })
    .catch(error => {
      console.log(error)
    })
  }, [isLoggedIn, user])
  
  

  return (
    <Grid container spacing={2} my={2}>
      <Grid item xs={12} textAlign="start" mx={3}>
        <Typography variant="h5">
          {user.nickname}님의 나만의 팀
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="end" mx={3}>
        <Button size="large" variant="contained" onClick={() => {navigate("/myteams/form")}}>
          신규등록
        </Button>
      </Grid>
      <Grid item xs={12} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {teams.length === 0 && (<Typography>아직 나만의 팀을 작성하지 않았습니다.</Typography>)}
        {() => {
          if (teams !== []) {
            return teams.map((team) => (
                <MyteamSummary team={team} key={team.id} />
            ))}      
          }
        }
        
      </Grid>

    </Grid>
    
  )
}
