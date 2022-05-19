import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import styles from "./MyteamSummary.module.css";

export default function MyTeamSummarySimulation(props) {
  const team = props.team;
  const isMyTeam = props.isMyTeam;

  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 300,
        textAlign: "start",
        borderRadius: "24px",
        margin: "0",
        width: "100%",
      }}
    >
      {isMyTeam ? (
        <CardHeader
          title={team.name}
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            margin: "0",
            padding: "8px",
            textAlign: "center",
          }}
        ></CardHeader>
      ) : (
        <CardHeader
          title={team.name}
          sx={{
            backgroundColor: "gray",
            color: "white",
            margin: "0",
            padding: "8px",
            textAlign: "center",
          }}
        ></CardHeader>
      )}

      <CardContent sx={{ mx: "auto" }}>
        {team.members.map((member, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.order}>{member.ord}</div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.year}>{member.year}</div>
            <div className={styles.position}>{member.pos}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
