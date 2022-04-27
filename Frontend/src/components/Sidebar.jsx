import React, { useState } from "react";
import "./Sidebar.css";

import { Box, Divider, Button, Typography, Drawer } from "@mui/material";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = props => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [playerInfoOpen, setPlayerInfoOpen] = React.useState(false);

  const handleMenuClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 4) {
      setPlayerInfoOpen(!playerInfoOpen);
    } else {
      setPlayerInfoOpen(false);
    }
  };

  const sidebarWidth = 250;
  const myPoint = 100;
  // 로그인한 경우 => "나만의 팀" 메뉴 추가
  const menus = ["공지사항", "자유게시판", "배틀게시판", "시뮬레이션"];

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
          <Typography textAlign="right">내 포인트 : {myPoint}점</Typography>
          <Typography textAlign="right">내 포인트 : {myPoint}점</Typography>
        </Box>

        <Divider color="white" />

        <List sx={{ py: 4 }}>
          {menus.map((text, index) => (
            <ListItem
              sx={{ borderRadius: 1 }}
              button
              selected={selectedIndex === index}
              onClick={event => handleMenuClick(event, index)}
              key={text}
              color="white"
              className="nav-item"
            >
              <ListItemText align="right" primary={text} />
            </ListItem>
          ))}
          {/* 선수정보 메뉴 */}
          <ListItem
            sx={{ borderRadius: 1 }}
            button
            selected={selectedIndex === 4}
            onClick={event => handleMenuClick(event, 4)}
            key="선수정보"
            color="white"
            className="nav-item"
          >
            <ListItemText sx={{ mr: 1 }} align="right" primary="선수정보" />
            {playerInfoOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {/* 선수정보 하위 메뉴 */}
          <Collapse in={playerInfoOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ borderRadius: 1 }} button key="타자">
                <ListItemText align="right" primary="타자" />
              </ListItem>
              <ListItem sx={{ borderRadius: 1 }} button key="투수">
                <ListItemText align="right" primary="투수" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>

      {/* 유저가 로그인한 경우 */}
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
    </Box>
  );
};

export default Sidebar;
