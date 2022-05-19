import React, { useEffect, useState } from 'react'
import { Grid, Typography, Paper, Table, TableCell, TableContainer, TableHead, TableBody, TableRow } from '@mui/material'
import { Tab, Tabs } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const TabPanel = (props) => {
  const { children, value, index, ...other} = props

  return (
    <div role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      class="tabpanel"
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  )
}

const BaseStat = (props) => {
  const {playerName, team, birthYear, graudate, heightAndweight, state, payroll, playerType} = props.player
  return (
    <>
      <Grid item xs={12} m={3} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h4">{playerName}</Typography>
        {/* <Typography variant="h5" textAlign="end" sx={{verticalAlign: "text-bottom"}}>{team} no.{backnumber}</Typography> */}
      </Grid>
      <Grid item xs={12} m={3}>
        <Paper sx={{padding: "16px"}}>
          <Typography>
            생년월일
          </Typography>
          <Typography mb={2}>
            <b>{birthYear}</b>
          </Typography>
          <Typography>
            출신고교(팀)
          </Typography>
          <Typography mb={2}>
            <b>{graudate}</b>
          </Typography>
          <Typography>
            연봉
          </Typography>
          <Typography mb={2}>
            <b>{payroll}</b>
          </Typography>
          <br />
          <Typography>
            {state === "ACTIVE" ? "현역" : "은퇴"} 선수입니다. {playerType !== "NOT" && "(용병)"}
          </Typography>

        </Paper>
      </Grid>
    </>
  )
}

const HitterYearStat = (props) => {
  const {year, team, avg, G, PA, AB, R, H, RBI} = props.stats

  const columns = ["", "소속팀", "타율", "경기", "타석", "타수", "안타", "타점", "득점"]
  const row = [year, team, avg, G, PA, AB, H, RBI, R]

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {columns.map((value, i) => (
            <TableCell align="center" key={i}>{value}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          <TableRow>
            {row.map((value, i) => (
              <TableCell align="center" key={i}>{value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const HitterSituationalStat = (props) => {
  const {runner, ballcount, batorder, pitcher, outcount} = props.stats
  const columns = ["구분", "타율", "타석", "안타"]
  const rows = ["cat", "avg", "AB", "H"]

  return (
  <>
    <h5>주자별</h5>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {columns.map((value, i) => (
            <TableCell align="center" key={i}>{value}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {runner.map((row, i) => (
            <TableRow key={i}>
              {rows.map((value, j) => (
                <TableCell align="center" key={j}>{row[value]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h5>볼카운트별</h5>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {columns.map((value, i) => (
            <TableCell align="center" key={i}>{value}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {ballcount.map((row, i) => (
            <TableRow key={i}>
              {rows.map((value, j) => (
                <TableCell align="center" key={j}>{row[value]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}


export default function Playerinfo(props) {
  const defaultProps = {
    player: {
      playerName: "이름",
      birthYear: "2000-01-01",
      heightAndweight: "123/123",
      graudate: "이름",
      state: "이름",      // 현역인지 아닌지
      payroll: "10000",   // 만원 단위
      playerType: "이름", // 용병인지 아닌지
    },
    pitcherStat: {

    },
    hitterStat: {

    },
  }

  const [player, setPlayer] = useState(defaultProps.player)
  const { playerid } = useParams()
  const [tabValue, setTabValue] = useState(0)
  const handleTabChange = (event, newValue) => {setTabValue(newValue)}
  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  useEffect(() => {
    console.log(playerid)
    if (playerid !== undefined) {
      axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `player/${playerid}`,
        method: 'GET',
      })
      .then(response => {
        setPlayer(response.data.playerInfoResDto)
      })
      .catch(error => {
        console.log(error)
        console.log('선수정보 로드에 실패했습니다.')
      })
    }
  }, [])

  return (
    <Grid container
      textAlign="start"
      sx={{".tabpanel": {margin: 3}}}
    >
      <BaseStat player={player}></BaseStat>
      {/* <Grid item xs={12} m={3}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="player stats" color="primary">
            <Tab label="시즌 기록" {...a11yProps(0)} />
            <Tab label="상황별 기록" {...a11yProps(1)} />
          </Tabs>
      </Grid> */}

      {/* <Grid item xs={12}>
        <TabPanel value={tabValue} index={0}>
          <HitterYearStat stats={player.stats}></HitterYearStat>    
        </TabPanel>
      </Grid> */}

      {/* <Grid item xs={12}>
        <TabPanel value={tabValue} index={1}>
          <HitterSituationalStat stats={player.situational_stats}></HitterSituationalStat>    
        </TabPanel>
      </Grid> */}
    
    
    
    </Grid>
  )
}
