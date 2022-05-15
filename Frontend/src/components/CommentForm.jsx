import React, { useState, useEffect } from "react";

import { Box, Button, Typography, Grid } from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentForm = props => {
  const [comments, setComments] = useState([]);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const boardId = props.boardId;

  // 렌더링 시마다 실행
  useEffect(() => {
    setComments(props.post.replies);
  });

  // const [form, setForm] = useState({
  //   id: "",
  //   author: "",
  //   content: "",
  // });

  const handleCommentInput = event => {
    const value = event.target.value;
    console.log(value);

    // TODO: 댓글 입력시 데이터 저장하기
  };

  const CommentAddForm = props => {
    if (isLoggedIn) {
      return (
        <>
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
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* <Box sx={{ bgcolor: "red", width: "100%" }}>asdf</Box> */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ my: 2 }}>
          {comments.map(comment => (
            <Comment comment={comment} />
          ))}
          <CommentAddForm />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentForm;
