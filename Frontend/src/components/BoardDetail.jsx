import React, { useState, useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import DetailBottomMenu from "./DetailBottomMenu";
import CommentForm from "./CommentForm";

import axios from "axios";
import { useSelector } from "react-redux";

const BoardDetail = props => {
  const [post, setPost] = useState({});

  const boardType = useSelector(state => state.boardType);

  useEffect(() => {
    let urlArr = window.location.pathname.split("/")
    let boardId = urlArr[urlArr.length - 1]

    getPostDetail(boardId);
  }, []);

  // 게시글 목록 받아오기
  const getPostDetail = async (boardId) => {
    let requestUrl = "";

    if (boardType === "freeBoard") {
      requestUrl = `/free/${boardId}`;
    } else {
      requestUrl = `/battle/${boardId}`;
    }

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: requestUrl,
    })
      .then(res => {
        let postData = {}

        if (boardType === "battleBoard") {
          postData = {
            title: res.data.bbTitle,
            username: res.data.username,
            created_at: res.data.bbWriteTime.substring(0, 10),
            // 나만의 팀 정보 추가하기!
          }
        } else {
          postData = {
            title: res.data.fbContent,
            content: res.data.fbTitle,
            username: res.data.username,
            created_at: res.data.fbWriteTime.substring(0, 10),
          }
        }

        setPost(postData)

        console.log(postData)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const PostContent = props => {
    switch (boardType) {
      case "freeBoard":
        return (<Box textAlign="left" sx={{ mb: 2, width: "100%" }}>
        {post.content.split("\n").map(txt => (
          <>
            {txt}
            <br />
          </>
        ))}
      </Box>)
      default:
        return <></>
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        m: 8,
        px: 4,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mx: 2,
        }}
      >
        {/* 타이틀 */}
        <Typography
          sx={{ color: "gray" }}
          variant="subtitle2"
          textAlign="left"
          gutterBottom
          component="div"
        >
          {props.title}
        </Typography>
      </Box>
      {/* 제목 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6" textAlign="left" gutterBottom component="div">
          {post.title}
        </Typography>
      </Box>
      {/* 작성자, 작성일 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          mx: 2,
        }}
      >
        <Typography sx={{ mr: 1 }} textAlign="left" variant="overline">
          {post.author}
        </Typography>
        <Typography sx={{ color: "gray" }} textAlign="left" variant="caption">
          {post.created_at}
        </Typography>
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      {/* 게시글 내용 (\n을 <br/>로 변환) */}
      <PostContent />

      {/* TODO: 배틀 게시판 => 팀 정보 등 추가하기 */}
      
      <DetailBottomMenu />

      <Divider sx={{ mt: 1, width: "100%" }} />

      <CommentForm />
    </Box>
  );
};

export default BoardDetail;
