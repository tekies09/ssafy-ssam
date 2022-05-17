// Header 컴포넌트입니다.

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from '../../assets/sidebar_logo.png';

const SSAMIcon = styled.div`
  a:visited {
    text-decoration: none;
  }
`

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
          <Link to="/">
            <SSAMIcon><img src={mainLogo} height="50px" alt="baseball SSAM" /></SSAMIcon>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
}
