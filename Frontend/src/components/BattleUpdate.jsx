import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField, MenuItem, Select } from "@mui/material";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BattleUpdate = props => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [teamList, setTeamList] = useState([]);

  const location = useLocation();
  console.log(location.state);

  const [title, setTitle] = useState(location.state.title);
  const [myTeamId, setMyTeamId] = useState(location.state.myTeamId);

  useEffect(() => {
    getMyTeamList();
  }, []);

  // 글 작성자의 나만의 팀 목록을 가져온다.
  const getMyTeamList = () => {
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `myteam/userTeamList/${user.userId}`,
    })
      .then(res => {
        let tList = res.data.myTeamList;
        setTeamList(tList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTitleInput = event => {
    setTitle(event.target.value);
  };

  const handleTeamSelect = event => {
    setMyTeamId(event.target.value);

    // TODO: 화면에 팀 정보를 표 형태로 보여준다.
  };

  const handleUpdateClick = () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (myTeamId === "") {
      alert("나의 팀을 선택해주세요.");
      return;
    }

    let url = window.location.pathname.split("/");
    let boardId = url[url.length - 2];

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "PUT",
      url: "/battle/update",
      data: {
        bbTitle: title,
        battleBoardId: boardId,
        myTeamId: myTeamId,
      },
    })
      .then(res => {
        navigate(`/board/battle/${boardId}`);
      })
      .catch(err => {
        console.log(err);
      });
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
        <Box>
          {/* 뒤로가기 버튼 */}
          <IconButton
            sx={{ px: 2 }}
            aria-label="back"
            size="large"
            component={Link}
            to="./.."
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
          {/* 수정 버튼 */}
          <Button
            sx={{ m: 0, color: "white", borderRadius: 8 }}
            variant="contained"
            color="sub_300"
            size="large"
            onClick={handleUpdateClick}
          >
            <Typography textAlign="left">수정</Typography>
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 1, mb: 2, width: "100%" }} />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ m: 2 }}>
          {/* 제목 입력창 */}
          <FormControl sx={{ mb: 2 }} fullWidth>
            <Typography sx={{ mb: 1 }} variant="h6">
              Title
            </Typography>
            <TextField
              sx={{
                borderRadius: 4,
                backgroundColor: "white",
                disableUnderline: true,
                px: 2,
                py: 1,
              }}
              id="title"
              required
              value={title}
              onChange={handleTitleInput}
              placeholder="제목을 입력해 주세요."
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </FormControl>
          {/* 나만의 팀 선택 */}
          <FormControl fullWidth>
            <Typography sx={{ mb: 1 }} variant="h6">
              ⚾ My Team ⚾
            </Typography>
            {teamList.length != 0 ? (
              <Select id="myTeam" value={myTeamId} onChange={handleTeamSelect}>
                {teamList.map(data => (
                  <MenuItem value={data.myTeamId} key={data.myTeamId}>
                    {data.myTeamName}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              ""
            )}
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default BattleUpdate;
