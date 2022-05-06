import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const DetailBottomMenu = props => {
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
      {/* 수정, 삭제 버튼 */}
      <Box>
        <Button
          sx={{ m: 1, p: 1, color: "white" }}
          variant="contained"
          color="sub_300"
          size="large"
          component={Link}
          to="./update"
        >
          <Typography textAlign="left">수정</Typography>
        </Button>
        <Button
          sx={{ m: 1, p: 1, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
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
