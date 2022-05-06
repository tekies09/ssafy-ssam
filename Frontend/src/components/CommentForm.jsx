import React, { useState } from "react";

import { Box, Button, Typography, Grid } from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import Comment from "./Comment";

const CommentForm = props => {
  // const [form, setForm] = useState({
  //   id: "",
  //   author: "",
  //   content: "",
  // });

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
        p: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ my: 2 }}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default CommentForm;
