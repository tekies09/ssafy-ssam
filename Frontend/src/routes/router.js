import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Signup from "../pages/Signup";
import NoticeBoardList from "../pages/Board/NoticeBoardList";
import NoticeCreatePage from "../pages/Board/NoticeCreatePage";
import NoticeBoardDetail from "../pages/Board/NoticeBoardDetail";
import NoticeUpdatePage from "../pages/Board/NoticeUpdatePage";
import FreeBoardList from "../pages/Board/FreeBoardList";
import FreeCreatePage from "../pages/Board/FreeCreatePage";
import FreeBoardDetail from "../pages/Board/FreeBoardDetail";
import FreeUpdatePage from "../pages/Board/FreeUpdatePage";
import BattleBoardList from "../pages/Board/BattleBoardList";
import BattleCreatePage from "../pages/Board/BattleCreatePage";
import BattleBoardDetail from "../pages/Board/BattleBoardDetail";
import BattleUpdatePage from "../pages/Board/BattleUpdatePage";
import MainPage from "../pages/MainPage";
import MyTeams from "../pages/MyTeams";
import Sidebar from "../components/layout/Sidebar";
import Account from "../pages/Account";
import Playerinfo from "../pages/Playerinfo";
import ScrollTop from "../components/layout/ScrollTop";
import Header from "../components/layout/Header";

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        {/* 사이드바 공간을 차지하는 pseudo-class */}
        <Box sx={{ minWidth: "250px", maxWidth: "250px" }}></Box>

        <Box sx={{ flexGrow: 1, pt: 8, pb: 5 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myteams" element={<MyTeams />} />
            <Route path="/account" element={<Account />} />

            {/* 공지사항 */}
            <Route path="/board/notice" element={<NoticeBoardList />} />
            <Route path="/board/notice/create" element={<NoticeCreatePage />} />
            <Route
              path="/board/notice/:noticeId"
              element={<NoticeBoardDetail />}
            />
            <Route
              path="/board/notice/:noticeId/update"
              element={<NoticeUpdatePage />}
            />
            {/* 자유게시판 */}
            <Route path="/board/free" element={<FreeBoardList />} />
            <Route path="/board/free/create" element={<FreeCreatePage />} />
            <Route
              path="/board/free/:freeBoardId"
              element={<FreeBoardDetail />}
            />
            <Route
              path="/board/free/:freeBoardId/update"
              element={<FreeUpdatePage />}
            />
            {/* 배틀게시판 */}
            <Route path="/board/battle" element={<BattleBoardList />} />
            <Route path="/board/battle/create" element={<BattleCreatePage />} />
            <Route
              path="/board/battle/:battleBoardId"
              element={<BattleBoardDetail />}
            />
            <Route
              path="/board/battle/:battleBoardId/update"
              element={<BattleUpdatePage />}
            />

            {/* 선수 정보 */}
            <Route path="/player/:id" element={<Playerinfo />} />
          </Routes>
          <ScrollTop />
        </Box>
      </Router>
    </>
  );
}
