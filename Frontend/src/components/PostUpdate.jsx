import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Box, Button, Divider, Typography } from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PostUpdate = props => {
  const location = useLocation();
  console.log(location);

  const [form, setForm] = useState({
    title: location.state.title,
    content: location.state.content,
  });

  const handleFormInput = event => {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value,
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

export default PostUpdate;
