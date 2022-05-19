import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField, Select, InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostCreate = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [myTeamId, setMyTeamId] = useState(0);
  const [teamList, setTeamList] = useState([]);

  // const [form, setForm] = useState({
  //   title: "",
  //   myTeamId: undefined,
  // });

  useEffect(() => {
    getMyTeamList();
  }, []);

  // 글 작성자의 나만의 팀 목록을 가져온다.
  const getMyTeamList = () => {
    // console.log(user);
    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `myteam/userTeamList/${user.userid}`,
    })
      .then((res) => {
        let tList = res.data.myTeamList;
        setTeamList(tList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mockData = [
    { myTeamId: 1, myTeamName: "싸피 이글스" },
    { myTeamId: 2, myTeamName: "싸피 타이거즈" },
    { myTeamId: 3, myTeamName: "토트넘" },
    { myTeamId: 4, myTeamName: "리버풀" },
  ];

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleTeamSelect = (event) => {
    setMyTeamId(event.target.value);

    // TODO: 화면에 팀 정보를 표 형태로 보여준다.
  };

  // 게시글 등록
  const handleSubmitClick = () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (myTeamId === "") {
      alert("나의 팀을 선택해주세요.");
      return;
    }

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "POST",
      url: "/battle/post",
      data: {
        bbTitle: title,
        myTeamId: myTeamId,
        userId: user.userid,
      },
    })
      .then((res) => {
        navigate("/board/battle/");
        console.log(res.data.message);
      })
      .catch((err) => {
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
          {/* 목록 보기 버튼 */}
          <IconButton
            sx={{ px: 2 }}
            aria-label="back"
            size="large"
            component={Link}
            to="./.."
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
          {/* 등록 버튼 */}
          {teamList.length > 0 ? (
            <Button
              sx={{ m: 0, color: "white", borderRadius: 8 }}
              variant="contained"
              color="sub_300"
              size="large"
              onClick={handleSubmitClick}
            >
              <Typography textAlign="left">등록</Typography>
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Divider sx={{ mt: 1, mb: 2, width: "100%" }} />

      <Box sx={{ width: "100%" }}>
        {teamList.length > 0 ? (
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
              <Select id="myTeam" value={myTeamId} onChange={handleTeamSelect}>
                {teamList.map((data) => (
                  <MenuItem value={data.myTeamId} key={data.myTeamId}>
                    {data.myTeamName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          <Box>
            <FormControl fullWidth>
              <Typography sx={{ mb: 1 }} variant="h6">
                ⚾ My Team ⚾
              </Typography>
            </FormControl>
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
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PostCreate;
