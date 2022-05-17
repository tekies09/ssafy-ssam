import React, { useState, useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import DetailBottomMenu from "./DetailBottomMenu";
import CommentForm from "./CommentForm";

import axios from "axios";
import { useSelector } from "react-redux";

const BoardDetail = props => {
  const [post, setPost] = useState({});
  const [boardId, setBoardId] = useState(undefined);
  const boardType = useSelector(state => state.boardType);

  useEffect(() => {
    let urlArr = window.location.pathname.split("/");
    let currentId = urlArr[urlArr.length - 1];
    setBoardId(currentId);

    getPostDetail(currentId);
  }, []);

  // 게시글 받아오기
  const getPostDetail = async id => {
    let requestUrl = "";

    if (boardType === "freeBoard") {
      requestUrl = `/free/${id}`;
    } else if (boardType === "battleBoard") {
      requestUrl = `/battle/${id}`;
    } else {
      requestUrl = `/notice/${id}`;
    }

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: requestUrl,
    })
      .then(res => {
        let postData = {};

        if (boardType === "battleBoard") {
          postData = {
            title: res.data.bbTitle,
            username: res.data.username,
            created_at: res.data.bbWriteTime.substring(0, 10),
            // 나만의 팀 정보 추가하기!
          };
        } else if (boardType === "freeBoard") {
          postData = {
            title: res.data.fbTitle,
            content: res.data.fbContent,
            username: res.data.username,
            created_at: res.data.fbWriteTime.substring(0, 10),
          };
        } else {
          postData = {
            title: res.data.ntitle,
            content: res.data.ncontent,
            username: res.data.username,
            created_at: res.data.nwriteTime.substring(0, 10),
          };
        }

        setPost(postData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const PostContent = props => {
    switch (boardType) {
      case "freeBoard":
      case "notice":
        if (post.content) {
          return (
            <Box textAlign="left" sx={{ mb: 2, width: "100%" }}>
              {post.content.split("\n").map(txt => (
                <>
                  {txt}
                  <br />
                </>
              ))}
            </Box>
          );
        } else {
          return (
            <Box textAlign="left" sx={{ mb: 2, width: "100%" }}>
              {post.content}
            </Box>
          );
        }
      default:
        return <Box></Box>;
    }
  };

  const CommentSection = () => {
    if (boardType === "freeBoard") {
      return (
        <CommentForm sx={{ width: "100%" }} post={post} boardId={boardId} />
      );
    } else {
      return <></>;
    }
  };

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
          {post.username}
        </Typography>
        <Typography sx={{ color: "gray" }} textAlign="left" variant="caption">
          {post.created_at}
        </Typography>
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      <PostContent />

      <DetailBottomMenu post={post} />

      <Divider sx={{ mt: 1, width: "100%" }} />

      <CommentSection />

      {/* <CommentForm post={post} boardId={boardId} /> */}
    </Box>
  );
};

export default BoardDetail;
