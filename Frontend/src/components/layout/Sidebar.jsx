import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import { Box, Divider, Button, Typography, Drawer } from "@mui/material";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Login from "../modal/Login";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = props => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [playerInfoOpen, setPlayerInfoOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = (event, index) => {
    setSelectedIndex(index);

    // if (index === 0) {
    //   dispatch({ type: "noticeType" });
    // }

    if (index === 0 || index === 1) {
      dispatch({ type: "freeBoardType" });
    }

    if (index === 2) {
      dispatch({ type: "battleBoardType" });
    }

    if (index === 4) {
      setPlayerInfoOpen(!playerInfoOpen);
    } else {
      setPlayerInfoOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("token");
  };

  const sidebarWidth = 202;
  const myPoint = 100;
  // 로그인한 경우 => "나만의 팀" 메뉴 추가
  const menus = [
    { name: "공지사항", url: "/board/notice" },
    { name: "자유게시판", url: "/board/free" },
    { name: "배틀게시판", url: "/board/battle" },
    { name: "시뮬레이션", url: "/" },
  ];

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const LogoutButton = props => {
    if (isLoggedIn) {
      return (
        <Box sx={{ mb: 6 }}>
          <Button
            sx={{ color: "white" }}
            size="large"
            // align="left"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            <Typography textAlign="left">로그아웃</Typography>
          </Button>
        </Box>
      );
    } else {
      return <div></div>;
    }
  };
  const LoginMenu = props => {
    switch (isLoggedIn) {
      case true:
        return (
          <>
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
          </>
        );
      default:
        return (
          <>
            <Button
              sx={{ mx: "auto", my: 1, height: "50px" }}
              variant="contained"
              color="sub_300"
              size="large"
              fullWidth
              onClick={() => {
                dispatch({ type: "openLoginModal" });
              }}
            >
              <Typography sx={{}}>로그인</Typography>
            </Button>
            <Typography
              textAlign="right"
              color="lightgrey"
              component={Link}
              to="/signup"
            >
              회원가입
            </Typography>
          </>
        );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "dark.main",
        color: "white",
        px: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        top: "64px",
      }}
      width={sidebarWidth}
      height="calc(100vh - 100px)"
      variant="permanent"
    >
      <Login />
      <Box>
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <LoginMenu />
        </Box>

        <Divider color="white" />

        <Box>
          <List sx={{ py: 4 }}>
            {menus.map((menu, index) => (
              <ListItem
                sx={{ borderRadius: 1 }}
                button
                selected={selectedIndex === index}
                onClick={event => handleMenuClick(event, index)}
                key={menu.name}
                color="white"
                className="nav-item"
                component={Link}
                to={menu.url}
              >
                <ListItemText align="right" primary={menu.name} />
                {/* <ListItemText align="right" primary={menu.name} /> */}
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
              component={Link}
              to="/"
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
            <ListItem
              sx={{ borderRadius: 1 }}
              button
              selected={selectedIndex === 5}
              onClick={event => handleMenuClick(event, 5)}
              key="나만의 팀"
              color="white"
              className="nav-item"
              component={Link}
              to="/"
            >
              <ListItemText sx={{ mr: 1 }} align="right" primary="나만의 팀" />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* 유저가 로그인한 경우 */}
      <LogoutButton />
    </Box>
  );
};

export default Sidebar;
