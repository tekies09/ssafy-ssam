import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Grid, Typography } from '@mui/material'
import MyteamSummary from '../components/MyteamSummary'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function MyTeamlist() {
  const [teams, setTeams] = useState([])
  const user = useSelector((state) => state.user)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const navigate = useNavigate()

  const getTeams = () => {
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
  }

  const handleDelete = (id) => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `myteam/${id}`,
      method: "DELETE",
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      console.log(response)
      getTeams()
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    if (isLoggedIn === false) {
      alert("나만의 팀 기능을 이용하려면 로그인해야 합니다.")
      navigate("/")
      console.log("go")
      return
    }

    getTeams()
    
  }, [isLoggedIn, user])
  
  

  return (
    <Grid container spacing={2} my={2}>
      <Grid item xs={12} textAlign="start" mx={3}>
        <Typography variant="h5">
          나만의 팀 목록
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="end" mx={3}>
        { teams.length < 5 && (
          <Button size="large" variant="contained" onClick={() => {navigate("/myteams/form")}}>
            신규등록
          </Button>
        )}
        { teams.length === 5 && (
          <Typography>나만의 팀은 최대 5팀까지 작성할 수 있습니다.</Typography>
        )}
      </Grid>
      <Grid item xs={12} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {teams.length === 0 && (<Typography>아직 나만의 팀을 작성하지 않았습니다.</Typography>)}
        {teams.length > 0 && teams.map((team, i) => (<div key={i}>
          <MyteamSummary team={team} handleDelete={handleDelete} />
        </div>
        ))}
      </Grid>
    </Grid>
  )
}
