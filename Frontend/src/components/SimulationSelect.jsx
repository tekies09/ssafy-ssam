import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField, Select, MenuItem } from "@mui/material";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const SimulationSelect = props => {
  const location = useLocation();
  const userInfo = useSelector(state => state.user);

  const [myTeamName, setMyTeamName] = useState("");
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    getMyTeamList();
  }, []);

  // 글 작성자의 나만의 팀 목록을 가져온다.
  const getMyTeamList = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `myteam/userTeamList/${userInfo.userId}`,
    })
      .then(res => {
        let teamList = res.data;
        setTeamList(teamList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const mockData = [
    { myTeamId: 1, myTeamName: "싸피 이글스" },
    { myTeamId: 2, myTeamName: "싸피 타이거즈" },
    { myTeamId: 3, myTeamName: "토트넘" },
    { myTeamId: 4, myTeamName: "리버풀" },
  ];

  const handleTeamSelect = event => {
    setMyTeamName(event.target.value);

    // TODO: 화면에 팀 정보를 표 형태로 보여준다.
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        m: 8,
        px: 4,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mx: 2,
        }}
      >
        {/* 타이틀 */}
        <h3>&nbsp;&nbsp;{props.title}</h3>
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      {/* VS */}
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* 나의 팀 */}
        <Box sx={{ width: "40%" }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {myTeamName}
          </Typography>
          <Typography variant="h6">{userInfo.nickname}</Typography>
        </Box>
        <Box>
          <Typography variant="h3">VS</Typography>
        </Box>
        {/* 상대 팀 */}
        {/* 상대 팀 이름 : location.state.teamInfo.myTeamName */}
        {/* 상대 닉네임 : location.state.username */}
        <Box sx={{ width: "40%" }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            상대 팀 이름
          </Typography>
          <Typography variant="h6">상대 닉네임</Typography>
        </Box>
      </Box>

      {/* 나의 팀 선택 */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ m: 2 }}>
          {/* 나만의 팀 선택 */}
          <FormControl fullWidth>
            <Typography sx={{ mb: 1 }} variant="h6">
              ⚾ Select My Team ⚾
            </Typography>
            <Select id="myTeam" value={myTeamName} onChange={handleTeamSelect}>
              {mockData.map(data => (
                <MenuItem value={data.myTeamName} key={data.myTeamId}>
                  {data.myTeamName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <Button
          sx={{ mt: 4, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
          component={Link}
          to="./.."
          startIcon={<SportsBaseballIcon />}
          endIcon={<SportsBaseballIcon />}
        >
          <Typography textAlign="left">START BATTLE</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SimulationSelect;
