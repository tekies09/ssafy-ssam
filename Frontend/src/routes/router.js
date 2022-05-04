import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Signup from "../pages/Signup";
import NoticeBoardList from "../pages/Board/NoticeBoardList";
import NoticeCreatePage from "../pages/Board/NoticeCreatePage";
import NoticeBoardDetail from "../pages/Board/NoticeBoardDetail";
import FreeBoardList from "../pages/Board/FreeBoardList";
import FreeCreatePage from "../pages/Board/FreeCreatePage";
import FreeBoardDetail from "../pages/Board/FreeBoardDetail";
import BattleBoardList from "../pages/Board/BattleBoardList";
import MainPage from "../pages/MainPage";
import Sidebar from "../components/Sidebar";
import Account from "../pages/Account";
import ScrollTop from "../components/ScrollTop";

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Sidebar />
        {/* 사이드바 공간을 차지하는 pseudo-class */}
        <Box sx={{ minWidth: "250px", maxWidth: "250px" }}></Box>

        <Box sx={{ flexGrow: 1, pt: 8, pb: 5 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />

            {/* 공지사항 */}
            <Route path="/board/notice" element={<NoticeBoardList />} />
            <Route path="/board/notice/create" element={<NoticeCreatePage />} />
            <Route
              path="/board/notice/:noticeId"
              element={<NoticeBoardDetail />}
            />
            {/* 자유게시판 */}
            <Route path="/board/free" element={<FreeBoardList />} />
            <Route path="/board/free/create" element={<FreeCreatePage />} />
            <Route
              path="/board/free/:freeBoardId"
              element={<FreeBoardDetail />}
            />
            {/* 배틀게시판 */}
            <Route path="/board/battle" element={<BattleBoardList />} />
          </Routes>
          <ScrollTop />
        </Box>
      </Router>
    </>
  );
}
