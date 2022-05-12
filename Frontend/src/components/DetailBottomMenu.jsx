import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Button, Typography } from "@mui/material";
import PostDeleteModal from "./modal/PostDeleteModal";

const DetailBottomMenu = props => {
  const dispatch = useDispatch();

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
        <Button
          sx={{ m: 1, p: 1, color: "white" }}
          variant="contained"
          color="sub_300"
          size="large"
          component={Link}
          to="./update"
          // TODO: 제목, 내용 데이터 axios 요청으로 받아와서 넘기기
          state={{
            title: "수정할 글의 제목",
            content: "수정할 글의 내용\n\n두 줄 아래 글의 내용",
          }}
        >
          <Typography textAlign="left">수정</Typography>
        </Button>
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
