import { Grid, Typography, Autocomplete, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerlistTable from '../components/PlayerlistTable'

const seasonOptions = ["2022", "2021", "2020", "2019", "2018"]
const samplePitcherList = [
  {
    "name": "김투수",
    "id": 222333,
    "team": "SK",
    "era_rt": "11",
    "g_cn": "22",
    "w_cn": "11",
    "l_cn": "11",
    "sv_cn": "2",
    "hld_cn": "2",
    "ip_cn": "2",
    "wpct_rt": "2",
    "h_cn": "2",
    "hr_cn": "2",
    "bb_cn": "1",
    "hbp_cn": "1",
    "so_cn": "1",
    "er_cn": "1",
    "whip_rt": "1",
  },
  {
    "name": "이투수",
    "id": 222334,
    "team": "SK",
    "era_rt": "11",
    "g_cn": "22",
    "w_cn": "11",
    "l_cn": "11",
    "sv_cn": "2",
    "hld_cn": "2",
    "ip_cn": "2",
    "wpct_rt": "2",
    "h_cn": "2",
    "hr_cn": "2",
    "bb_cn": "1",
    "hbp_cn": "1",
    "so_cn": "1",
    "er_cn": "1",
    "whip_rt": "1",
  },
]

export default function PlayerlistPitcher() {
  
  const columns = [
    "name",
    "team",
    "era_rt",
    "g_cn",
    "w_cn",
    "l_cn",
    "sv_cn",
    "hld_cn",
    "ip_cn",
    "wpct_rt",
    "h_cn",
    "hr_cn",
    "bb_cn",
    "hbp_cn",
    "so_cn",
    "er_cn",
    "whip_rt",
  ]

  const labels = [
    "이름",
    "팀",
    "ERA",
    "경기",
    "승",
    "패",
    "세이브",
    "홀드",
    "이닝",
    "승률",
    "피안타",
    "피홈런",
    "볼넷",
    "사구",
    "삼진",
    "자책점",
    "WHIP",
  ]

  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [year, setYear] = useState("2022")

  const handlePaginationChange = (event, page) => {
    setPage(page)
  }

  useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "players/pitcher",
      method: "GET",
      timeout: 3000
    })
    .then(response => {
      setPlayers(response.data.players)
    })
    .catch(error => {
      console.log(error)
      // alert("선수 목록 로드에 실패했습니다.")
      setPlayers([...samplePitcherList])
    })
  }, [year])

  return (
    <Grid container spacing={1} mt={3} mx={1}>
      <Grid item xs={12}>
        <Typography variant="h5">
          시즌별 투수 정보
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
