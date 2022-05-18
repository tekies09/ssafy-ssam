import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Box, Button, Divider, Typography } from "@mui/material";

const SimulationSelect = props => {
  const location = useLocation();

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
        {/* 작성하기 버튼 */}
        {/* <CreateButton /> */}
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      {/* VS */}
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* 나의 팀 */}
        <Box>
          <Typography variant="h4">우리 팀 이름</Typography>
          <Typography variant="h5">내 닉네임</Typography>
        </Box>
        <Box>
          <Typography variant="h3">VS</Typography>
        </Box>
        {/* 상대 팀 */}
        {/* 상대 팀 이름 : location.state.teamInfo.myTeamName */}
        {/* 상대 닉네임 : location.state.username */}
        <Box>
          <Typography variant="h4">상대 팀 이름</Typography>
          <Typography variant="h5">상대 닉네임</Typography>
        </Box>
      </Box>

      {/* 나의 팀 선택 */}
    </Box>
  );
};

export default SimulationSelect;
