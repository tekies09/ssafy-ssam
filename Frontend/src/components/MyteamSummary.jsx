import React from 'react'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import styles from './MyteamSummary.module.css'

export default function TeamSummary(props) {
  const team = props.team

  const handleDelete = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `myteam/${team.myTeamId}`,
      method: "DELETE",
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
  <Card sx={{minWidth: 360, textAlign: "start", borderRadius: "24px", margin: "12px"}}>
    <CardHeader title={team.name} sx={{borderRadius: "24px", backgroundColor: "primary.main", color: "white", margin: "6px"}}>
    </CardHeader>
    <CardContent>
      {team.members.map((member, i) => (
        <div key={i} className={styles.row}>
          <div className={styles.order} >{member.ord}</div>
          <div className={styles.name} >{member.name}</div>
          <div className={styles.year} >{member.year}</div>
          <div className={styles.position} >{member.pos}</div>
        </div>
      ))}
    </CardContent>
    <CardActions>
      {/* <Button>수정</Button> */}
      <Button onClick={handleDelete}>삭제</Button>
    </CardActions>
  </Card>
  )
}