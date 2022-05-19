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
  const {name, team, birth_year, debut_year, position, backnumber} = props.player
  return (
    <>
      <Grid item xs={12} m={3} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5" textAlign="end" sx={{verticalAlign: "text-bottom"}}>{team} no.{backnumber}</Typography>
      </Grid>
      <Grid item xs={12} m={3}>
        <Typography>
          {birth_year}년생 / {debut_year}년 데뷔
        </Typography>
        <Typography>
          포지션: <b>{position}</b>
        </Typography>
      </Grid>
    </>
  )
}

const PitcherYearStat = (props) => {
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

const PitcherSituationalStat = (props) => {
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


export default function Pitcherinfo(props) {
  const defaultProps = {
    player: {
      id: 76313,
      name: "황재균",
      debut_year: "2006",
      birth_year: "1987",
      team: "KT 위즈",
      position: "내야수(우투우타)",
      backnumber: "10",
      stats: {
        year: 2022,
        team: "KT",
        avg: 0.313,
        G: 30,
        PA: 128,
        AB: 112,
        R: 15,
        H: 35,
        RBI: 15, 
      },
      situational_stats: {
        runner: [
          {
            cat: "주자없음",
            avg: 0.281,
            AB: 64,
            H: 18,
          },
          {
            cat: "1루",
            avg: 0.300,
            AB: 20,
            H: 6,
          },
          {
            cat: "2루",
            avg: 0.462,
            AB: 13,
            H: 6,
          },
        ],
        ballcount: [
          {
            cat: "0-0",
            avg: 0.417,
            AB: 12,
            H: 5,
          }
        ],
        batorder: [

        ],
        pitcher: [

        ],
        outcount: [

        ],
      },

    }
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
        url: 'player/yearsdetail',
        method: 'GET',
        params: {
          playerId: playerid,
          pOrh: 'p',
          years: '2022',
        }
      })
      .then(response => {
        setPlayer(response.data.player)
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
      <Grid item xs={12} m={3}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="player stats" color="primary">
            <Tab label="시즌 기록" {...a11yProps(0)} />
            <Tab label="상황별 기록" {...a11yProps(1)} />
          </Tabs>
      </Grid>

      <Grid item xs={12}>
        <TabPanel value={tabValue} index={0}>
          <PitcherYearStat stats={player.stats}></PitcherYearStat>    
        </TabPanel>
      </Grid>

      <Grid item xs={12}>
        <TabPanel value={tabValue} index={1}>
          <PitcherSituationalStat stats={player.situational_stats}></PitcherSituationalStat>    
        </TabPanel>
      </Grid>   
    </Grid>
  )
}