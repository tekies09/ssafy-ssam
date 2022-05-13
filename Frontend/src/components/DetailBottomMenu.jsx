import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Typography } from "@mui/material";
import PostDeleteModal from "./modal/PostDeleteModal";

const DetailBottomMenu = props => {
  const dispatch = useDispatch();
  const boardType = useSelector(state => state.boardType);

  const UpdateButton = () => {
    switch (boardType) {
      case "freeBoard":
        return (
          <Button
            sx={{ m: 1, p: 1, color: "white" }}
            variant="contained"
            color="sub_300"
            size="large"
            component={Link}
            to="./update"
            state={{
              title: props.post.title,
              content: props.post.content,
            }}
          >
            <Typography textAlign="left">수정</Typography>
          </Button>
        );
      case "battleBoard":
        return (
          <Button
            sx={{ m: 1, p: 1, color: "white" }}
            variant="contained"
            color="sub_300"
            size="large"
            component={Link}
            to="./update"
            state={{
              title: props.post.title,
            }}
          >
            <Typography textAlign="left">수정</Typography>
          </Button>
        );
      default:
        return <></>;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        p: 2,
      }}
    >
      {/* 게시글 삭제 확인 모달 */}
      <PostDeleteModal />
      {/* 수정, 삭제 버튼 */}
      <Box>
        <UpdateButton />
        <Button
          sx={{ m: 1, p: 1, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
          onClick={() => {
            dispatch({ type: "openPostDeleteModal" });
          }}
        >
          <Typography textAlign="left">삭제</Typography>
        </Button>
      </Box>

      {/* 목록 버튼 */}
      <Box>
        <Button
          sx={{ m: 1, p: 1, color: "white" }}
          variant="contained"
          color="sub_300"
          size="large"
          component={Link}
          to="./.."
        >
          <Typography textAlign="left">목록</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default DetailBottomMenu;
