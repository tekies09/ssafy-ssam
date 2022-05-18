import { Grid, Typography, Autocomplete, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerlistTable from '../components/PlayerlistTable'

const seasonOptions = ["2022", "2021", "2020", "2019", "2018"]
const sampleHitterList = [
  {
    "name": "김타자",
    "id": 123456,
    "team": "SK",
    "avg_rt": "111",
    "gdp_cn": "111",
    "pa_cn": "111",
    "h_cn": "111",
    "hr_cn": "111",
    "rbi_cn": "111",
    "r_cn": "111",
    "bb_cn": "111",
    "so_cn": "111",
    "gdp_cn": "111",
    "ops_rt": "111",
  },
  {
    "name": "박타자",
    "id": 123333,
    "team": "SK",
    "avg_rt": "111",
    "gdp_cn": "111",
    "pa_cn": "111",
    "h_cn": "111",
    "hr_cn": "111",
    "rbi_cn": "111",
    "r_cn": "111",
    "bb_cn": "111",
    "so_cn": "111",
    "gdp_cn": "111",
    "ops_rt": "111",
  },
]

export default function PlayerlistHitter() {

  const columns = [
    "name",
    "team",
    "avg_rt",
    "gdp_cn",
    "pa_cn",
    "h_cn",
    "hr_cn",
    "rbi_cn",
    "r_cn",
    "bb_cn",
    "so_cn",
    "gdp_cn",
    "ops_rt",
  ]

  const labels = [
    "이름",
    "팀",
    "타율",
    "경기",
    "타석",
    "안타",
    "홈런",
    "타점",
    "득점",
    "볼넷",
    "삼진",
    "병살",
    "OPS",
  ]

  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [year, setYear] = useState("2022")

  const handlePaginationChange = (event, page) => {
    setPage(page)
  }

  // year 값에 맞춰 선수 목록 탑재
  useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "players/hitter",
      method: "GET",
      timeout: 3000
    })
    .then(response => {
      setPlayers(response.data.players)
    })
    .catch(error => {
      console.log(error)
      // alert("선수 목록 로드에 실패했습니다.")
      setPlayers([...sampleHitterList])
    })
  }, [year])

  return (
    <Grid container mt={3} mx={1}>
      <Grid item xs={12}>
        <Typography variant="h5">
          시즌별 타자 정보
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          disablePortal
          id="season-combo"
          onChange={(event, value) => {setYear(value)}}
          options={seasonOptions}
          sx={{ width: 160, marginLeft: "auto", marginRight: "16px" }}
          renderInput={(params) => <TextField {...params} label="시즌" />}
        />
      </Grid>
      <Grid item xs={12}>
        <PlayerlistTable players={players} columns={columns} labels={labels} />
      </Grid>
      <Grid item xs={12}>
        {/* <Pagination
          sx={{ my: 3 }}
          count={maxPage} // 페이지 수
          showFirstButton
          showLastButton
          size="large"
          color="sub_300"
          onChange={handlePaginationChange}
        /> */}
      </Grid>
    </Grid>
  )
}
