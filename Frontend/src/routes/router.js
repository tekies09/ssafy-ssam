import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import NoticeBoardList from "../pages/Board/NoticeBoardList";
import FreeBoardList from "../pages/Board/FreeBoardList";
import BattleBoardList from "../pages/Board/BattleBoardList";
import MainPage from "../pages/MainPage";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/board/notice" element={<NoticeBoardList />} />
            <Route path="/board/free" element={<FreeBoardList />} />
            <Route path="/board/battle" element={<BattleBoardList />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
