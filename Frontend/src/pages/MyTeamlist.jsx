import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import MyteamSummary from '../components/MyteamSummary'

// 팀 표시 Component
// const TeamSummary = props => {
//   const team = props.team

//   return (
//   <Card sx={{maxWidth: 480, textAlign: "start", borderRadius: "24px"}}>
//     <CardHeader title={team.name} sx={{borderRadius: "24px", backgroundColor: "primary.main", color: "white", margin: "6px"}}>
//     </CardHeader>
//     <CardContent>
//       {team.members.map((member, i) => (
//         <div key={i} style={{width: "100%"}}>
//           <div style={{display: "inline-block", width: "33%"}}>{member.ord}</div>
//           <div style={{display: "inline-block", width: "33%"}}>{member.name}</div>
//           <div style={{display: "inline-block", width: "33%"}}>{member.pos}</div>
//         </div>
//       ))}
//     </CardContent>
//     <CardActions>
//       <Button>수정</Button>
//       <Button>삭제</Button>
//     </CardActions>
//   </Card>
//   )
// }

export default function MyTeamlist() {
  const [teams, setTeams] = useState([])
  const testTeams = [
    {
      id: 1,
      name: "테스트용 나만의 팀 1",
      members: [
        {id: 12345, ord: 1, pos: "2B", name: "김갑돌"},
        {id: 12347, ord: 2, pos: "SS", name: "김납돌"},
        {id: 23456, ord: 3, pos: "LF", name: "김답돌"},
        {id: 23442, ord: 4, pos: "DH", name: "김랍돌"},
        {id: 23313, ord: 5, pos: "1B", name: "김맙돌"},
        {id: 26562, ord: 6, pos: "CF", name: "김밥돌"},
        {id: 54356, ord: 7, pos: "RF", name: "김삽돌"},
        {id: 45754, ord: 8, pos: "3B", name: "김압돌"},
        {id: 45755, ord: 9, pos: "C", name: "김잡돌"},
        {id: 95733, ord: 10, pos: "P", name: "김찹돌"},
      ]
    },
    {
      id: 2,
      name: "테스트용 나만의 팀 2",
      members: [
        {id: 12345, ord: 1, pos: "2B", name: "김갑돌"},
        {id: 12347, ord: 2, pos: "SS", name: "김납돌"},
        {id: 23456, ord: 3, pos: "LF", name: "김답돌"},
        {id: 23442, ord: 4, pos: "DH", name: "김랍돌"},
        {id: 23313, ord: 5, pos: "1B", name: "김맙돌"},
        {id: 26562, ord: 6, pos: "CF", name: "김밥돌"},
        {id: 54356, ord: 7, pos: "RF", name: "김삽돌"},
        {id: 45754, ord: 8, pos: "3B", name: "김압돌"},
        {id: 45755, ord: 9, pos: "C", name: "김잡돌"},
        {id: 95733, ord: 10, pos: "P", name: "김찹돌"},
      ]
    },
  ]

  useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "",
      timeout: 3000,
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      setTeams(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  

  return (
    <Grid container spacing={2} my={2}>
      <Grid item xs={12}>
        <Typography variant="h5">
          나만의 팀 목록
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {testTeams.map((team) => (<MyteamSummary team={team} key={team.id} />))}
      </Grid>
    </Grid>
  )
}
