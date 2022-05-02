import React, { useState } from "react";

import { Box, Button, Divider, Paper, Typography, Grid } from "@mui/material";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  Input,
  TextField,
} from "@mui/material";
import Comment from "./Comment";

const CommentForm = props => {
  const [form, setForm] = useState({
    id: "",
    author: "",
    title: "",
    content: "",
  });

  const mockComment = [
    {
      id: 1,
      author: "유지민",
      content: "ㄹㅇㅋㅋ 솔직히 개오바였음 ㅋㅋ",
      created_at: "2022.05.03 21:52",
    },
    {
      id: 2,
      author: "최연준",
      content: "2222",
      created_at: "2022.05.03 21:52",
    },
    {
      id: 3,
      author: "심자윤",
      content: "3333",
      created_at: "2022.05.03 21:52",
    },
    {
      id: 4,
      author: "이동혁",
      content:
        "댓글은 최대 200자 이내로만 작성 가능합니다. 댓글은 최대 200자 이내로만 작성 가능합니다. 댓글은 최대 200자 이내로만 작성 가능합니다.",
      created_at: "2022.05.03 21:52",
    },
    {
      id: 5,
      author: "김가을",
      content: "this is english comment",
      created_at: "2022.05.03 21:52",
    },
  ];

  const handleCommentInput = event => {
    const value = event.target.value;
    console.log(value);

    // TODO: 댓글 입력시 데이터 저장하기
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
        <h3>&nbsp;&nbsp;댓글</h3>
      </Box>

      <Divider sx={{ mt: 1, mb: 2, width: "100%" }} />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ m: 2 }}>
          {mockComment.map(comment => (
            <Comment comment={comment} />
          ))}
          {/* 새로운 댓글 입력창 */}
          <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
            <TextField
              sx={{
                borderRadius: 4,
                backgroundColor: "white",
                disableUnderline: true,
                px: 2,
                py: 1,
              }}
              onChange={handleCommentInput}
              placeholder="댓글을 입력해 주세요."
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </FormControl>
          {/* 댓글 등록 버튼 */}
          <Grid container justifyContent="flex-end">
            <Button
              sx={{ m: 0, color: "white", borderRadius: 8 }}
              variant="contained"
              color="sub_300"
            >
              <Typography textAlign="left">등록</Typography>
            </Button>
          </Grid>
          {/* <Button
            sx={{ m: 0, color: "white", borderRadius: 8 }}
            variant="contained"
            color="sub_300"
            size="large"
          >
            <Typography textAlign="left">등록</Typography>
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CommentForm;
