import React, { useState, useEffect, useRef } from "react";

import { Box, Button, Typography, Grid } from "@mui/material";
import { FormControl, TextField } from "@mui/material";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import axios from "axios";

const CommentForm = props => {
  const inputRef = useRef(null);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const userId = useSelector(state => state.user.userId);
  const boardId = props.boardId;

  const [comments, setComments] = useState([]);

  const [form, setForm] = useState({
    content: "",
  });

  // const [content, setContent] = useState("");

  const handleCommentInput = event => {
    const { id, value } = event.target;

    setForm({
      ...form,
      [id]: value,
    });
  };

  // 렌더링 시마다 실행
  useEffect(() => {
    setComments(props.post.replies);
    console.log(comments);
  }, [props.post.replies, comments]);

  const handleSubmitClick = async () => {
    if (form.content === "") {
      return;
    }

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "POST",
      url: `/free/${boardId}/comments`,
      data: {
        content: form.content,
        freeBoardId: boardId,
        userId: userId,
      },
    })
      .then(res => {
        setForm({
          content: "",
        });
        // setContent("");

        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const CommentInput = () => {
  //   return (
  //     <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
  //       <TextField
  //         sx={{
  //           borderRadius: 4,
  //           backgroundColor: "white",
  //           disableUnderline: true,
  //           px: 2,
  //           py: 1,
  //         }}
  //         id="comment"
  //         autoFocus="autoFocus"
  //         value={content}
  //         onChange={handleCommentInput}
  //         placeholder="댓글을 입력해 주세요."
  //         variant="standard"
  //         InputProps={{
  //           disableUnderline: true,
  //         }}
  //       />
  //     </FormControl>
  //   );
  // };

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
              id="content"
              value={form.content}
              autoFocus="autoFocus"
              onChange={handleCommentInput}
              // onChange={event => {
              //   const { eventCount, target, text } = event.nativeEvent;
              //   let value = target.value;
              //   console.log(value);
              //   setContent(value);
              // }}
              // onChangeText={text => {
              //   console.log(text);
              //   setContent(text);
              // }}
              // onChange={handleCommentInput}
              // ref={inputRef}
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
              onClick={handleSubmitClick}
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
          {comments
            ? comments.map((comment, idx) => (
                <Comment comment={comment} boardId={boardId} idx={idx} />
              ))
            : ""}
          <CommentAddForm />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentForm;
