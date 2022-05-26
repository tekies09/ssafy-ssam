import React, { useEffect, useMemo, useRef, useState } from 'react'
import { styled, Table, TableHead, TableCell, TableContainer, TableRow, TableBody, Link, CircularProgress } from '@mui/material'
import { Container, Box, Grid, Typography, FormControl, InputLabel, Paper, Select, MenuItem, TextField, Button, InputAdornment, Autocomplete } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// 추가 가능한 시즌
const avaliableYears = ["2022", "2021", "2020", "2019", "2018"]

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
              <TableCell align="center">시즌</TableCell>
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
                    <TableCell align="center">{row.year}</TableCell>
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


const defaultValue = {
  playerId: 1,
  name: "",
  year: "",
  pitcherOrHitter: "",
  statusId: 0,
}

// 나만의 팀에 선수를 등록하는 컴포넌트
const MemberInput = function (props) {
  const [pos, setPos] = useState("")
  const [ord, setOrd] = useState("")
  const [year, setYear] = useState("2022")
  const [open, setOpen] = useState(false)
  
  const [inputValue, setInputValue] = useState(defaultValue)
  const [list, setList] = useState([])
  
  const loading = open && list.length === 0;

  // 선수 목록 로드에 필요한 메서드
  const loadPlayers = (year) => {
    console.log("test")
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `player/yearNameList?year=${year}&word=`,
      // url: `player/yearsdetail?`,
      method: 'GET',
    })
    .then(response => {
      setList(response.data.searchList)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    let active = true
    if (!loading) {
      return undefined
    }

    loadPlayers(year)
    return () => {active = false}
  }, [loading])

  const handleOrdChange = (event) => {
    setOrd(()=>(event.target.value))
  }
  const handlePosChange = (event) => {
    setPos(()=>(event.target.value))
  }
  const handleYearChange = (event) => {
    setYear(()=>(event.target.value))
    setList([])
    loadPlayers(year)
  }

  const handleAdd = (event) => {
    if (inputValue.pitcherOrHitter === 'Pitcher' && pos !== 'P') {
      alert("투수를 야수로 배치할 수 없습니다.")
      return
    }
    
    if (inputValue.pitcherOrHitter !== 'Pitcher' && pos === 'P') {
      alert("야수를 투수로 배치할 수 없습니다.")
      return
    }

    if (ord === "") {
      alert("타순을 입력해주세요.")
      return
    }

    if (pos === "") {
      alert("수비위치를 입력해주세요.")
      return
    }

    const newMember = {
      ord: ord,
      pos: pos,
      name: inputValue.name,
      year: inputValue.year,
      playerId: inputValue.playerId,
      statusId: inputValue.statusId,
    }

    console.log(newMember)
    const addresult = props.addMember(newMember)
    if (!!addresult) {
      setInputValue(defaultValue)
      setOrd("")
      setPos("")
    }
  }

  return (<Grid container item xs={12} >
    <Grid item xs={12} md={2} padding={1}>
      <FormControl fullWidth>
        <InputLabel id="year">시즌</InputLabel>
        <Select labelId="year" label="시즌" value={year} onChange={handleYearChange}>
          {avaliableYears.map((year)=>(<MenuItem value={year} key={year}>{year}</MenuItem>))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} md={4} padding={1}>
      <Autocomplete
        open={open}
        onOpen={() => {setOpen(true)}}
        onClose={() => {setOpen(false)}}
        options={list}
        getOptionLabel={(option) => `${option.name} ${option.pitcherOrHitter === "Pitcher" ? "(투수)" : "(야수)"}` || ""}
        renderOption={(props, option) => {
          return (
            <li {...props} key={`${option.playerId}-${option.statusId}`}>
              {`${option.name} ${option.pitcherOrHitter === "Pitcher" ? "(투수)" : "(야수)"}` || ""}
            </li>
          )
        }}
        value={inputValue}
        onChange={(event, value) => {
          setInputValue(value)
          if (value.pitcherOrHitter === "Pitcher") {
            setOrd("10")
            setPos("P")
          }
        }}
        renderInput={(params) => (
          <TextField {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          
          ></TextField>
        )} />
    </Grid>
    <Grid item xs={12} md={2} padding={1}>
      <FormControl fullWidth>
        <InputLabel id="batOrder">타순</InputLabel>
        <Select labelId="batOrder" label="타순" value={ord} onChange={handleOrdChange}>
          <MenuItem value={"10"}>(투수)</MenuItem>
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
          <MenuItem value={"CF"}>중견수</MenuItem>
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
    {ord: "1", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "2", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "3", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "4", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "5", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "6", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "7", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "8", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "9", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
    {ord: "10", name: "", pos: "", year: "", playerId: undefined, statusId: undefined},
  ]

  const [members, setMembers] = useState(initMembers)
  const [teamname, setTeamname] = useState("")
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  

  // 선수 추가 / 삭제 메서드
  const addMember = (player) => {
    let newMembers = members

    if (newMembers[(player.ord) - 1].playerId !== undefined) {
      alert('이미 사용중인 타순입니다.')
      return false
    }
    
    if (newMembers.find(member => (member.pos === player.pos)) !== undefined) {
      alert('이미 사용중인 포지션입니다.')
      return false
    }
    
    newMembers[(player.ord) - 1] = player
    setMembers([...newMembers])
    return true
  }

  const deleteMember = (ord) => {
    let newMembers = members
    newMembers[(ord - 1)] = {ord: String(ord), name: "", pos: "", year: "", playerId: undefined, statusId: undefined}
    setMembers([...newMembers])
  }

  // 나만의 팀 작성
  const sendTeam = () => {
    const sendMembers = members.map((member) => {
      return {
        battingOrder: member.ord,
        defensePosition: member.pos,
        pitcherOrHitter: member.pos === "P" ? "Pitcher" : "Hitter",
        statusId: member.statusId
      }
    })

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: 'myteam/createMyTeam',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        userId: user.userid,
        myTeamName: teamname,
        myTeamPlayerReqDtoList: sendMembers
      }
    })
    .then(response => {
      console.log(response)
      console.log("나만의 팀 생성 완료")
      navigate("/myteams")
    })
    .catch(error => {
      console.log(error)
    })
  }

  
  
  return (
    <Grid container spacing={2} mt={3} mx={3} maxWidth="lg">

      {/* 제목 */}
      <Grid item xs={12} >
        <Typography variant="h5" textAlign="start">
          나만의 팀 생성
        </Typography>
      </Grid>
      <MemberInput members={members} addMember={addMember} />
      
      {/* 야구장 이미지 & 포지션별 선수 이름 */}
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

      {/* 입력 선수 목록 */}
      <PlayerTable members={members} deleteMember={deleteMember} />

      {/* 제목 폼 & 입력 관련 버튼 */}
      <Grid item container xs={12} className="submitform">
        <Grid item xs={8}>
          나만의 팀 이름
          <TextField size="small" sx={{mx: 1}} value={teamname} onInput={(e) => {setTeamname(e.target.value)}} />
          <Button variant="contained" onClick={sendTeam} sx={{height: "100%"}}>
            팀 생성
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" color="warning" onClick={() => {setMembers(initMembers)}} sx={{height: "100%"}}>
            초기화
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" onClick={() => {navigate(-1)}} sx={{height: "100%"}}>
            뒤로
          </Button>

        </Grid>
      </Grid>
    </Grid>
  )
}
