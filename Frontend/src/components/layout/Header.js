// Header 컴포넌트입니다.

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import style from './Header.module.css'

export default function Header() {
  return (
    <header className="ssam-header" id="back-to-top-anchor">
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(135deg, #37468B, #638493)",
          position: "fixed",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            className="logo"
            textAlign="left"
            m={1}
            sx={{ flexGrow: 1 }}
          >
            <b>SSAM</b>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}
