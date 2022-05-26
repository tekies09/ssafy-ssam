import { Grid, Typography, Autocomplete, TextField, Pagination } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerlistTable from '../components/PlayerlistTable'

const seasonOptions = ["2022", "2021", "2020", "2019", "2018"]
const limit = 10

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
  ]

  const [players, setPlayers] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(30)
  const [year, setYear] = useState("2022")

  const handlePaginationChange = (event, page) => {
    setPage(page)
  }

  useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "player/pitcherList",
      method: "GET",
      params: {
        year: year,
        page: page,
        limit: limit,
      },
      timeout: 3000
    })
    .then(response => {
      setPlayers(response.data.detailList)
      setMaxPage(parseInt(response.data.allCount / limit))
    })
    .catch(error => {
      console.log(error)
      setPlayers([])
    })
  }, [year, page])

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
          value={year}
          sx={{ width: 160, marginLeft: "auto", marginRight: "16px" }}
          renderInput={(params) => <TextField {...params} label="시즌" />}
        />
      </Grid>
      <Grid item xs={12}>
        <PlayerlistTable players={players} columns={columns} labels={labels} />
      </Grid>
      <Grid item xs={12}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Pagination
            sx={{ my: 3 }}
            count={maxPage} // 페이지 수
            showFirstButton
            showLastButton
            size="large"
            color="primary"
            onChange={handlePaginationChange}
          />
        </div>
      </Grid>
    </Grid>
  )
}
