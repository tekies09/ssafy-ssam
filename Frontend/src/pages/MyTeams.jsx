import React, { useEffect, useMemo, useRef, useState } from 'react'
import { styled, Table, TableHead, TableCell, TableContainer, TableRow, TableBody, Link } from '@mui/material'
import { Container, Box, Grid, Typography, FormControl, InputLabel, Paper, Select, MenuItem, TextField, Button, InputAdornment, Autocomplete } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import axios from 'axios'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const getPos = (members, str) => {
  const tgt = members.find(member => member.pos === str)
  if (!!tgt) {
    return tgt.name
  } else {
    return "없음"
  }
}

// 나만의 팀에 등록된 선수를 표시하는 컴포넌트
const PlayerTable = (props) => {

  const { members, deleteMember } = props
  const handleClear = (ord) => {
    deleteMember(ord)
  }

  const positionLocal = {
    "": "",
    "1B": "1루수",
    "2B": "2루수",
    "3B": "3루수",
    "SS": "유격수",
    "LF": "좌익수",
    "CF": "중견수",
    "RF": "우익수",
    "P": "투수",
    "C": "포수",
    "DH": "지명타자",
  }

  return (
    <Grid item xs={12} className="mainteamsettings">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="타자">
          <TableHead>
            <TableRow>
              <TableCell align="center">타순</TableCell>
              <TableCell align="center">이름</TableCell>
              <TableCell align="center">포지션</TableCell>
              <TableCell align="center">편집</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((row) => {
              if (row.playerId === undefined) {
                return (<TableRow key={row.ord} sx={{display: 'none'}}></TableRow>)
              } else {
                return (
                  <TableRow
                    key={row.ord}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{(parseInt(row.ord) < 10) && row.ord}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{positionLocal[row.pos]}</TableCell>
                    <TableCell align="center" sx={{color: "red"}} onClick={() => {handleClear(row.ord)}}>
                      삭제
                    </TableCell>
                  </TableRow>
                )
              }
            })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>)
}

// 나만의 팀에 선수를 등록하는 컴포넌트
const MemberInput = function (props) {
  const [player, setPlayer] = useState("")
  const [pos, setPos] = useState("")
  const [ord, setOrd] = useState("")

  // {ord: "10", name: "", pos: "P", playerId: undefined}

  const defaultValue = {id: 1, name: '', team: '', cat: ''}
  const [inputValue, setInputValue] = useState(defaultValue)
  const [availablePlayers, setAvailablePlayers] = useState([
    defaultValue,
    {playerId: 77829, name: '김광현', team: 'SSG', pos: "P", },
    {playerId: 61101, name: '임찬규', team: 'LG', pos: "P", },
    {playerId: 77248, name: '오재원', team: '두산', pos: "SS", },
    {playerId: 71564, name: '이대호', team: '롯데', pos: "DH", },
    {playerId: 71565, name: '이대호', team: '동명이인', pos: "DH",},
  ])

  // 선수 목록 로드에 필요한 메서드
  const loadPlayers = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '',
      method: 'GET',
    })
    .then(response => {
      setAvailablePlayers({...response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }
  useEffect(() => {
  })

  const handleOrdChange = (event) => {
    setOrd(()=>(event.target.value))
  }
  const handlePosChange = (event) => {
    setPos(()=>(event.target.value))
  }

  const handleAdd = (event) => {
    const newMember = {
      ord: ord,
      pos: pos,
      name: inputValue.name,
      playerId: inputValue.playerId
    }
    console.log(newMember)
    props.addMember(newMember)
    console.log(props.team)
    setInputValue(defaultValue)
    setOrd("")
    setPos("")
  }

  return (<Grid container item xs={12} >
    <Grid item xs={12} md={6} padding={1}>
      <Autocomplete
        disablePortal
        options={availablePlayers}
        getOptionLabel={(option) => `${option.name} ${option.team}` || ""}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={inputValue}
        onChange={(event, value) => {setInputValue(value)}}
        renderInput={(params) => (
          <TextField {...params}
          
          ></TextField>
        )} />
    </Grid>
    <Grid item xs={12} md={2} padding={1}>
      <FormControl fullWidth>
        <InputLabel id="batOrder">타순</InputLabel>
        <Select labelId="batOrder" label="타순" value={ord} onChange={handleOrdChange}>
          <MenuItem value={"10"}>-</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
          <MenuItem value={"8"}>8</MenuItem>
          <MenuItem value={"9"}>9</MenuItem>
        </Select>
      </FormControl>

    </Grid>
    <Grid item xs={12} md={2} padding={1}>
      <FormControl fullWidth>
        <InputLabel id="position">수비위치</InputLabel>
        <Select labelId="position" label="수비위치" value={pos} onChange={handlePosChange}>
          <MenuItem value={"P"}>투수</MenuItem>
          <MenuItem value={"1B"}>1루수</MenuItem>
          <MenuItem value={"2B"}>2루수</MenuItem>
          <MenuItem value={"3B"}>3루수</MenuItem>
          <MenuItem value={"SS"}>유격수</MenuItem>
          <MenuItem value={"LF"}>좌익수</MenuItem>
          <MenuItem value={"MF"}>중견수</MenuItem>
          <MenuItem value={"RF"}>우익수</MenuItem>
          <MenuItem value={"DH"}>지명타자</MenuItem>
          <MenuItem value={"C"}>포수</MenuItem>
        </Select>
      </FormControl>

    </Grid>
    <Grid item xs={12} md={2} padding={1}>
      <Button variant="contained" onClick={handleAdd} fullWidth sx={{height: "100%"}}>
        추가
      </Button>
    </Grid>
  </Grid>)
}


export default function MyTeams(props) {
  // 나만의 팀 구성
  // 10번: 투수 (실제 타석에 서지 않음)
  const initMembers = [
    {ord: "1", name: "", pos: "", playerId: undefined},
    {ord: "2", name: "", pos: "", playerId: undefined},
    {ord: "3", name: "", pos: "", playerId: undefined},
    {ord: "4", name: "", pos: "", playerId: undefined},
    {ord: "5", name: "", pos: "", playerId: undefined},
    {ord: "6", name: "", pos: "", playerId: undefined},
    {ord: "7", name: "", pos: "", playerId: undefined},
    {ord: "8", name: "", pos: "", playerId: undefined},
    {ord: "9", name: "", pos: "", playerId: undefined},
    {ord: "10", name: "", pos: "", playerId: undefined},
  ]

  const [members, setMembers] = useState(initMembers)
  const [teamname, setTeamname] = useState("")

  

  // 선수 추가 / 삭제 메서드
  const addMember = (player) => {
    let newMembers = members

    if (newMembers[(player.ord) - 1].playerId !== undefined) {
      alert('이미 사용중인 타순입니다.')
      
      return
    }
    
    if (newMembers.find(member => (member.pos === player.pos)) !== undefined) {
      alert('이미 사용중인 포지션입니다.')
      
      return
    }
    
    newMembers[(player.ord) - 1] = player
    setMembers([...newMembers])
    console.log(members)
  }
  const deleteMember = (ord) => {
    let newMembers = members
    newMembers[(ord - 1)] = {ord: String(ord), name: "", pos: "", playerId: undefined}
    setMembers([...newMembers])
  }

  // 나만의 팀 작성
  const sendTeam = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: 'myteam/createMyTeam',
      method: 'POST',
      headers: {
        Authentication: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        myTeamName: teamname,
        myTeamPlayerReqDtoList: members
      }
      .then(response => {
        console.log(response)

      })
      .catch(error => {
        console.log(error)
      })
    })
  }

  
  
  return (
    <Grid container spacing={2} mt={3} mx={3} maxWidth="lg">
      <Grid item xs={12} >
        <Typography variant="h5" textAlign="start">
          나만의 팀 생성
        </Typography>

      </Grid>
      <MemberInput members={members} addMember={addMember} />
      
      <Grid item container mx={6} xs={12} sx={{
        backgroundImage: `url(/images/field.svg)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        "span": {
          backgroundColor: "white",
          opacity: "100%",
        },
        minHeight: "480px"
      }}>
        
        <Grid item xs={12} sx={{mt: 10}}>
          <p style={{margin: "10px"}}><span>중견수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "CF")}</span></p>
        </Grid>      
        <Grid item xs={6}>
          <p style={{margin: "10px"}}><span>좌익수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "LF")}</span></p>
        </Grid>      
        <Grid item xs={6}>
          <p style={{margin: "10px"}}><span>우익수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "RF")}</span></p>
        </Grid>      

        <Grid item xs={4} />
        <Grid item xs={2}>
          <p style={{margin: "10px"}}><span>유격수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "SS")}</span></p>
        </Grid>      
        <Grid item xs={2}>
          <p style={{margin: "10px"}}><span>2루수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "2B")}</span></p>
        </Grid>      
        <Grid item xs={4} />

        <Grid item xs={3} />
        <Grid item xs={2}>
          <p style={{margin: "10px"}}><span>3루수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "3B")}</span></p>
        </Grid>      
        <Grid item xs={2}>
          <p style={{margin: "10px"}}><span>투수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "P")}</span></p>
        </Grid>      
        <Grid item xs={2}>
          <p style={{margin: "10px"}}><span>1루수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "1B")}</span></p>
        </Grid>      
        <Grid item xs={3} />

        <Grid item xs={12} sx={{mb: 10}}>
          <p style={{margin: "10px"}}><span>포수</span></p>
          <p style={{margin: "10px"}}><span>{getPos(members, "C")}</span></p>
        </Grid>      
        
      </Grid>
      <PlayerTable members={members} deleteMember={deleteMember} />
      <Grid item xs={12} className="submitform">
        나만의 팀 이름
        <TextField size="small" sx={{mx: 1}} value={teamname} onInput={(e) => {setTeamname(e.target.value)}}>
          
        </TextField>
        <Button variant="contained" onClick={sendTeam} sx={{height: "100%"}}>
          팀 생성
        </Button>
      </Grid>
    </Grid>
  )
}
