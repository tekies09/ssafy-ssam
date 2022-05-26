import React, { useState, useEffect } from "react";

import { Box, Button, Typography, Grid } from "@mui/material";
import { FormControl, Input } from "@mui/material";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import axios from "axios";

const CommentForm = props => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const userId = useSelector(state => state.user.userid);
  const boardId = props.boardId;

  const [comments, setComments] = useState([]);
  let content = "";

  const handleCommentInput = event => {
    content = event.target.value;
  };

  // 최초 로딩시에만 실행 (이후 댓글 추가시마다 댓글 목록 업데이트)
  useEffect(() => {
    getReplyList({
      boardId: boardId,
    });
  }, []);

  // 댓글 등록
  const handleSubmitClick = async () => {
    if (content === "") {
      return;
    }

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "POST",
      url: `/free/${boardId}/comments`,
      data: {
        content: content,
        freeBoardId: boardId,
        userId: userId,
      },
    })
      .then(res => {
        // 댓글 입력창 초기화
        content = "";

        // 댓글 목록 업데이트
        getReplyList({
          boardId: boardId,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 토론 커뮤니티 댓글 목록 가져오기
  const getReplyList = async props => {
    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: `free/${props.boardId}/comments`,
      params: props,
    })
      .then(res => {
        setComments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const CommentAddForm = props => {
    if (isLoggedIn) {
      return (
        <Box>
          {/* 새로운 댓글 입력창 */}
          <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
            <Input
              sx={{
                borderRadius: 4,
                backgroundColor: "white",
                disableUnderline: true,
                px: 2,
                py: 1,
              }}
              id="comment-input"
              size="small"
              disableUnderline="true"
              onInput={handleCommentInput}
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
        </Box>
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
