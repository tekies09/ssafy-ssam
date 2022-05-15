import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostCreate = props => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.userId);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleFormInput = event => {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  // 게시글 등록
  const handleSubmitClick = () => {
    if (form.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (form.content === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "POST",
      url: "/free/post",
      data: {
        title: form.title,
        content: form.content,
        userId: userId,
      },
    })
      .then(res => {
        navigate("/board/free/");
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
          <Button
            sx={{ m: 0, color: "white", borderRadius: 8 }}
            variant="contained"
            color="sub_300"
            size="large"
            onClick={handleSubmitClick}
          >
            <Typography textAlign="left">등록</Typography>
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 1, mb: 2, width: "100%" }} />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ m: 2 }}>
          {/* TODO: 제목/내용 입력시 outline 표시하기 */}
          {/* 제목 입력창 */}
          <FormControl sx={{ mb: 2 }} fullWidth>
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
              value={form.title}
              onChange={handleFormInput}
              placeholder="제목을 입력해 주세요."
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </FormControl>
          {/* 내용 입력창 */}
          <FormControl fullWidth>
            <TextField
              sx={{
                borderRadius: 4,
                backgroundColor: "white",
                disableUnderline: true,
                p: 2,
              }}
              id="content"
              required
              value={form.content}
              onChange={handleFormInput}
              placeholder="내용을 입력해 주세요."
              multiline
              rows={10}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCreate;
