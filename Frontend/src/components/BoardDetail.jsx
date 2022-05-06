import React, { useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

import DetailBottomMenu from "./DetailBottomMenu";
import CommentForm from "./CommentForm";

const BoardDetail = props => {
  const mockData = {
    id: 1,
    title: "시뮬레이션 기능 0.2051 Version Prefix 안내",
    author: "노문택",
    created_at: "2022.04.15 21:52",
    content:
      "일곱 개의 단어로 된 사전\n\n진은영\n\n봄, 놀라서 뒷걸음질치다\n맨발로 푸른 뱀의 머리를 밟다\n\n슬픔\n물에 불은 나무토막, 그 위로 또 비가 내린다\n\n자본주의\n형형색색의 어둠 혹은\n바다 밑으로 뚫린 백만 킬로의 컴컴한 터널\n―여길 어떻게 혼자 걸어서 지나가?\n\n문학\n길을 잃고 흉가에서 잠들 때\n멀리서 백열전구처럼 반짝이는 개구리 울음\n\n시인의 독백\n“어둠 속에 이 소리마저 없다면”\n부러진 피리로 벽을 탕탕 치면서\n\n혁명\n눈 감을 때만 보이는 별들의 회오리\n가로등 밑에서는 투명하게 보이는 잎맥의 길\n\n시, 일부러 뜯어본 주소 불명의 아름다운 편지\n너는 그곳에 살지 않는다",
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
        <Typography
          sx={{ color: "gray" }}
          variant="subtitle2"
          textAlign="left"
          gutterBottom
          component="div"
        >
          {props.title}
        </Typography>
      </Box>
      {/* 제목 */}
      {/* <h4 gutterBottom>{mockData.title}</h4> */}
      {/* <Typography variant="body2" textAlign="left" gutterBottom component="div">
        {mockData.title}
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6" textAlign="left" gutterBottom component="div">
          {mockData.title}
        </Typography>
      </Box>
      {/* 작성자, 작성일 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          mx: 2,
        }}
      >
        <Typography sx={{ mr: 1 }} textAlign="left" variant="overline">
          {mockData.author}
        </Typography>
        <Typography sx={{ color: "gray" }} textAlign="left" variant="caption">
          {mockData.created_at}
        </Typography>
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      {/* 게시글 내용 (\n을 <br/>로 변환) */}
      <Box textAlign="left" sx={{ mb: 2, width: "100%" }}>
        {mockData.content.split("\n").map(txt => (
          <>
            {txt}
            <br />
          </>
        ))}
      </Box>

      <DetailBottomMenu />

      <Divider sx={{ mt: 1, width: "100%" }} />

      <CommentForm />
    </Box>
  );
};

export default BoardDetail;
