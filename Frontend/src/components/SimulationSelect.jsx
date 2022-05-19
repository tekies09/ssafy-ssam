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
      url: `myteam/userTeamList/${userInfo.userid}`,
    })
      .then(res => {
        let teamList = res.data.myTeamList;
        setTeamList(teamList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTeamSelect = event => {
    setMyTeamName(event.target.value);

    location.state.players;
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
            {myTeamName == "" ? "나만의 팀" : myTeamName}
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
            {location.state.teamName}
          </Typography>
          <Typography variant="h6">{location.state.username}</Typography>
        </Box>
      </Box>

      {/* 나의 팀 선택 */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ m: 2 }}>
          {/* 나만의 팀 선택 */}
          <FormControl fullWidth>
            {teamList.length > 0 ? (
              <div>
                <Typography sx={{ mb: 1 }} variant="h6">
                  ⚾ Select My Team ⚾
                </Typography>
                <Select
                  id="myTeam"
                  value={myTeamName}
                  onChange={handleTeamSelect}
                >
                  {teamList.map(data => (
                    <MenuItem value={data.myTeamName} key={data.myTeamId}>
                      {data.myTeamName}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            ) : (
              <Button
                sx={{ m: 1, p: 1, color: "white" }}
                variant="contained"
                color="sub_300"
                component={Link}
                to="/myteams"
              >
                <Typography textAlign="left" variant="subtitle2">
                  아직 나만의 팀이 없습니다. 나만의 팀을 만들러 가볼까요?
                </Typography>
              </Button>
            )}
          </FormControl>
        </Box>
      </Box>

      {teamList.length > 0 ? (
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
      ) : (
        ""
      )}
    </Box>
  );
};

export default SimulationSelect;
