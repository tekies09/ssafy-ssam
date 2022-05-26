import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField, Select, MenuItem } from "@mui/material";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const SimulationSelect = props => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(state => state.user);
  const players = location.state.players;

  const [myTeamName, setMyTeamName] = useState("");
  const [myTeamPlayers, setMyTeamPlayers] = useState([]);
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
        let tList = res.data.myTeamList;
        setTeamList(tList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTeamSelect = event => {
    console.log(event.target.value);
    // 우리 팀 정보 저장
    setMyTeamPlayers(event.target.value["myTeamPlayerResDtoList"]);
    setMyTeamName(event.target.value["myTeamName"]);
  };

  const handleBattleStart = event => {
    const myPlayers = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const yourPlayers = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const myTeamToServe = { id: 1 };
    const yourTeamToServe = { id: 2 };

    // 1. 우리 팀 투수, 타자 정보 넣기
    myTeamPlayers.map((player, idx) => {
      axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        timeout: 3000,
        method: "GET",
        url: "player/yearsdetail",
        params: {
          statusId: player.statusId,
          pOrh: player.pitcherOrHitter,
          years: player.years,
        },
      })
        .then(res => {
          if (player.pitcherOrHitter === "Hitter") {
            let hitterInfo = res.data.hitterYearsDetailResDto;

            myPlayers[idx] = {
              ab_cn: hitterInfo["ab_cn"],
              so_cn: hitterInfo["so_cn"],
              h_cn: hitterInfo["h_cn"],
              h2_cn: hitterInfo["h2_cn"],
              h3_cn: hitterInfo["h3_cn"],
              hr_cn: hitterInfo["hr_cn"],
              name: hitterInfo["name"],
            };
          } else {
            let pitcherInfo = res.data.pitcherYearsDetailResDto;

            myPlayers[idx] = {
              kbb_rt: pitcherInfo["kbb_rt"],
              name: pitcherInfo["name"],
            };
          }
        })
        .catch(err => {
          console.log(err);
        });
    });

    // 2. 우리 팀 팀명 넣기
    myPlayers[10] = {
      myTeamName: myTeamName,
    };

    // 2.5. 우리 팀 테이블 정보 넣기
    myTeamToServe["name"] = myTeamName;

    const myMembersToServe = [];

    myTeamPlayers.map(player => {
      myMembersToServe.push({
        ord: player["battingOrder"],
        pos: player["defensePosition"],
        name: player["name"],
        year: player["years"],
      });
    });

    myTeamToServe["members"] = myMembersToServe;

    // 3. 상대 팀 투수, 타자 정보 넣기
    players.map((player, idx) => {
      axios({
        baseURL: process.env.REACT_APP_SERVER_URL,
        timeout: 3000,
        method: "GET",
        url: "player/yearsdetail",
        params: {
          statusId: player.statusId,
          pOrh: player.pitcherOrHitter,
          years: player.years,
        },
      })
        .then(res => {
          if (player.pitcherOrHitter === "Hitter") {
            let hitterInfo = res.data.hitterYearsDetailResDto;

            yourPlayers[idx] = {
              ab_cn: hitterInfo["ab_cn"],
              so_cn: hitterInfo["so_cn"],
              h_cn: hitterInfo["h_cn"],
              h2_cn: hitterInfo["h2_cn"],
              h3_cn: hitterInfo["h3_cn"],
              hr_cn: hitterInfo["hr_cn"],
              name: hitterInfo["name"],
            };
          } else {
            let pitcherInfo = res.data.pitcherYearsDetailResDto;

            yourPlayers[idx] = {
              kbb_rt: pitcherInfo["kbb_rt"],
              name: pitcherInfo["name"],
            };
          }
        })
        .catch(err => {
          console.log(err);
        });
    });

    // 4. 상대 팀명 넣기
    yourPlayers[10] = {
      myTeamName: location.state.teamName,
    };

    // 4.5. 상대 팀 테이블 정보 넣기
    yourTeamToServe["name"] = location.state.teamName;

    const yourMembersToServe = [];

    players.map(player => {
      yourMembersToServe.push({
        ord: player["battingOrder"],
        pos: player["defensePosition"],
        name: player["name"],
        year: player["years"],
      });
    });

    yourTeamToServe["members"] = yourMembersToServe;

    // 5. redux로 1 ~ 4의 정보 모두 store에 저장하기
    dispatch({ type: "myPlayers", payload: myPlayers });
    dispatch({ type: "yourPlayers", payload: yourPlayers });
    dispatch({ type: "myTeamToServe", payload: myTeamToServe });
    dispatch({ type: "yourTeamToServe", payload: yourTeamToServe });

    // 6. 시뮬레이션 페이지로 이동하기
    navigate("/simulation");
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
            {myTeamName === "" ? "나만의 팀" : myTeamName}
          </Typography>
          <Typography variant="h6">{userInfo.nickname}</Typography>
        </Box>
        <Box>
          <Typography variant="h3">VS</Typography>
        </Box>
        {/* 상대 팀 */}
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
                  onChange={handleTeamSelect}
                  sx={{
                    minWidth: "300px",
                    maxWidth: "300px",
                  }}
                >
                  {teamList.map(data => (
                    <MenuItem value={data} key={data.myTeamId}>
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
            startIcon={<SportsBaseballIcon />}
            endIcon={<SportsBaseballIcon />}
            onClick={handleBattleStart}
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
