import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import DetailBottomMenu from "./DetailBottomMenu";
import CommentForm from "./CommentForm";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./MyteamSummary.module.css";

const BoardDetail = (props) => {
  const [post, setPost] = useState([]);
  const [boardId, setBoardId] = useState(undefined);
  const [playerL, setPlayerL] = useState([]);
  const boardType = useSelector((state) => state.boardType);

  const navigate = useNavigate();

  useEffect(() => {
    let urlArr = window.location.pathname.split("/");
    let currentId = urlArr[urlArr.length - 1];
    setBoardId(currentId);
    getPostDetail(currentId);
  }, []);

  // 게시글 받아오기
  const getPostDetail = async (id) => {
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
      .then((res) => {
        let postData = {};

        if (boardType === "battleBoard") {
          postData = {
            title: res.data.bbTitle,
            username: res.data.username,
            created_at: res.data.bbWriteTime.substring(0, 10),
            teamName: res.data.teamName,
            players: res.data.myTeamPlayerList,
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

        setPlayerL(res.data.myTeamPlayerList);
        setPost(postData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBattleClick = () => {
    // 팀 정보를 넘겨 시뮬레이션 페이지로 이동
    navigate("/simulation/select", {
      state: {
        teamName: post.teamName,
        username: post.username,
        players: playerL,
      },
    });
  };

  const PostContent = (props) => {
    switch (boardType) {
      case "freeBoard":
      case "notice":
        if (post.content) {
          return (
            <Box textAlign="left" sx={{ mb: 2, width: "100%" }}>
              {post.content.split("\n").map((txt) => (
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
      case "battleBoard":
        return (
          <Box
            textAlign="center"
            sx={{
              mb: 2,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                minWidth: 360,
                maxWidth: "30%",
                textAlign: "center",
                margin: "12px",
                mb: "5vh",
              }}
            >
              <CardHeader
                title={post.teamName}
                sx={{
                  backgroundColor: "#6674A7",
                  color: "white",
                  fontSize: "15px"
                }}
              ></CardHeader>
              <CardContent sx={{
                backgroundColor: "#475174",
                color: "white"
              }}>
                {playerL &&
                  playerL.map((member, i) => {
                    if (i == 9) {
                      return (
                        <div key={i} className={styles.row}>
                          <div className={styles.battleorder}>
                            투수
                          </div>
                          <div className={styles.battleposition}>{member.myTeamPlayerId}</div>
                          <div className={styles.battlename}>{member.name}</div>
                          <div className={styles.battleposition}>
                            {member.defensePosition}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className={styles.row}>
                        <div className={styles.battleorder}>
                          {member.battingOrder}
                        </div>
                        <div className={styles.battleposition}>{member.myTeamPlayerId}</div>
                        <div className={styles.battlename}>{member.name}</div>
                        <div className={styles.battleposition}>
                          {member.defensePosition}
                        </div>
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
            {/* 배틀 버튼 */}
            <Divider />
            <Box sx={{ width: "100%", mt: "5vh" }}>
              <Button
                sx={{ m: 0, color: "white", borderRadius: 8 }}
                variant="contained"
                color="mint"
                size="large"
                onClick={handleBattleClick}
              >
                <Typography textAlign="left">
                  {post.teamName} 팀과 배틀하시겠습니까?
                </Typography>
              </Button>
            </Box>
          </Box>
        );
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
    </Box>
  );
};

export default BoardDetail;
