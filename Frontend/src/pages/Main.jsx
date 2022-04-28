import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Signup";
import NoticeBoardList from "./Board/NoticeBoardList";
import FreeBoardList from "./Board/FreeBoardList";
import BattleBoardList from "./Board/BattleBoardList";

const mainScreen = (
  <>
    <div>
      <p>메인 화면</p>
    </div>
  </>
);

export default function RouteList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={mainScreen} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/board/notice" element={<NoticeBoardList />} />
        <Route path="/board/free" element={<FreeBoardList />} />
        <Route path="/board/battle" element={<BattleBoardList />} />
      </Routes>
    </Router>
  );
}
