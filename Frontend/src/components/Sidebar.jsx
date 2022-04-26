import React, { useState } from "react";
import "./Sidebar.css";

import { Box, Divider, Button, Typography, Drawer } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = props => {
  // const [selected, setSelected] = useState(false);

  // // 다 false로 놓고 클릭한 것만 selected로
  // const toggleSelected = () => {
  //   setSelected(!selected);
  //   console.log(selected);
  //   console.log("toggle");
  // };

  const sidebarWidth = 250;

  return (
    <Box
      sx={{
        backgroundColor: "dark.main",
        color: "white",
        px: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      width={sidebarWidth}
      height="calc(100vh - 60px)"
      variant="permanent"
    >
      <div>
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* 유저가 로그인하지 않은 경우 */}
          {/* <Button
            sx={{ m: "auto", width: "100px", height: "60px" }}
            variant="contained"
            color="sub_300"
            size="large"
          >
            <Typography sx={{}}>로그인</Typography>
          </Button> */}
          {/* 유저가 로그인한 경우 */}
          <Button
            sx={{ mt: 3, mb: 1, color: "white" }}
            align="left"
            size="large"
            textAlign="left"
            startIcon={<AccountCircleIcon />}
          >
            <Typography textAlign="left">마이 페이지</Typography>
          </Button>
          <Typography textAlign="right">내 포인트 : 100점</Typography>
          <Typography textAlign="right">내 포인트 : 100점</Typography>
        </Box>

        <Divider color="white" />

        {/* 로그인한 경우 나만의 팀 추가 */}
        <List sx={{ py: 4 }}>
          {[
            "공지사항",
            "자유게시판",
            "배틀게시판",
            "시뮬레이션",
            "선수정보",
          ].map((text, index) => (
            <ListItem button key={text} color="white" className="nav-item">
              <ListItemText align="right" primary={text} />
            </ListItem>
          ))}
        </List>
      </div>

      {/* 로그인한 경우 */}
      <Box sx={{ mb: 6 }}>
        <Button
          sx={{ color: "white" }}
          size="large"
          // align="left"
          startIcon={<LogoutIcon />}
        >
          <Typography textAlign="left">로그아웃</Typography>
        </Button>
      </Box>

      {/* 로그인한 경우 하단 로그아웃 버튼 */}
    </Box>
  );
};

export default Sidebar;
