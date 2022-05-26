import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import styles from './MyteamSummary.module.css'

export default function TeamSummary(props) {
  const { team, handleDelete } = props

  return (
  <Card sx={{minWidth: 360, textAlign: "start", borderRadius: "24px", marginX: "24px", marginY: "12px"}}>
    <CardHeader title={team.myTeamName} sx={{borderRadius: "24px", backgroundColor: "primary.main", color: "white", margin: "6px"}}>
    </CardHeader>
    <CardContent>
      {team.myTeamPlayerResDtoList && team.myTeamPlayerResDtoList.map((member, i) => (
        <div key={i} className={styles.row}>
          <div className={styles.order} >{member.battingOrder}</div>
          <div className={styles.name} >{member.name}</div>
          <div className={styles.year} >{member.years}</div>
          <div className={styles.position} >{member.defensePosition}</div>
        </div>
      ))}
    </CardContent>
    <CardActions>
      {/* <Button>수정</Button> */}
      <Button onClick={() => {handleDelete(team.myTeamId)}}>삭제</Button>
    </CardActions>
  </Card>
  )
}