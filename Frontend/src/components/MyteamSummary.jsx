import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import styles from './MyteamSummary.module.css'

export default function TeamSummary(props) {
  const team = props.team

  return (
  <Card sx={{maxWidth: 480, textAlign: "start", borderRadius: "24px"}}>
    <CardHeader title={team.name} sx={{borderRadius: "24px", backgroundColor: "primary.main", color: "white", margin: "6px"}}>
    </CardHeader>
    <CardContent>
      {team.members.map((member, i) => (
        <div key={i} className={styles.row}>
          <div className={styles.order} >{member.ord}</div>
          <div className={styles.name} >{member.name}</div>
          <div className={styles.position} >{member.pos}</div>
        </div>
      ))}
    </CardContent>
    <CardActions>
      <Button>수정</Button>
      <Button>삭제</Button>
    </CardActions>
  </Card>
  )
}