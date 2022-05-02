import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import NoticeBoardList from "../pages/Board/NoticeBoardList";
import NoticeCreatePage from "../pages/Board/NoticeCreatePage";
import FreeBoardList from "../pages/Board/FreeBoardList";
import FreeCreatePage from "../pages/Board/FreeCreatePage";
import BattleBoardList from "../pages/Board/BattleBoardList";
import BattleCreatePage from "../pages/Board/BattleCreatePage";
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
            <Route path="/board/notice/create" element={<NoticeCreatePage />} />
            <Route path="/board/free" element={<FreeBoardList />} />
            <Route path="/board/free/create" element={<FreeCreatePage />} />
            <Route path="/board/battle" element={<BattleBoardList />} />
            <Route path="/board/battle/create" element={<BattleCreatePage />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}
