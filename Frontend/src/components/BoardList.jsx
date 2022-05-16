import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { Pagination, TextField, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import CreateIcon from "@mui/icons-material/Create";
import { useSelector } from "react-redux";

const BoardList = props => {
  const navigate = useNavigate();
  const [searchMenu, setSearchMenu] = useState("title");
  const [search, setSearch] = useState("");
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const boardType = useSelector(state => state.boardType);

  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const POST_PER_PAGE = 7;

  const searchInput = document.querySelector("#search-input");

  // 렌더링 시마다 실행
  useEffect(() => {
    updatePageCount();
  });

  // 페이지나 검색 결과 바뀔 때마다 실행
  useEffect(() => {
    updatePosts();
  }, [page, search]);

  // 페이지 수 계산
  const updatePageCount = () => {
    let requestUrl = "";

    if (boardType === "freeBoard") {
      requestUrl = "/free/allcount";
    } else if (boardType === "battleBoard") {
      requestUrl = "/battle/allcount";
    }

    axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: requestUrl,
    })
      .then(res => {
        let totalCount = res.data;
        setMaxPage(Math.ceil(totalCount / POST_PER_PAGE));
        console.log("총 페이지 수 : " + maxPage);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 게시글 목록 받아오기
  const getPostList = async props => {
    let requestUrl = "";

    if (boardType === "freeBoard") {
      requestUrl = "/free/list";
    } else {
      requestUrl = "/battle/list";
    }

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "GET",
      url: requestUrl,
      params: props,
    })
      .then(res => {
        console.log(res.data.content);
        let postList = [];

        if (boardType === "freeBoard") {
          postList = res.data.content;
          postList.map(post => {
            // 작성 시간 날짜만 표기하기
            post.fbWriteTime = post.fbWriteTime.substring(0, 10);
          });
        } else {
          postList = res.data.battleBoardList;
          postList.map(post => {
            // 작성 시간 날짜만 표기하기
            post.bbWriteTime = post.bbWriteTime.substring(0, 10);
          });
        }

        setPosts(postList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updatePosts = () => {
    // 제목 검색
    if (searchMenu === "title" && search !== "") {
      getPostList({
        page: page - 1,
        limit: POST_PER_PAGE,
        title: search,
      });
      // 작성자 검색
    } else if (searchMenu === "author" && search !== "") {
      getPostList({
        page: page - 1,
        limit: POST_PER_PAGE,
        nickname: search,
      });
      // 전체 게시글 검색
    } else {
      getPostList({
        page: page - 1,
        limit: POST_PER_PAGE,
      });
    }
  };

  const handlePaginationChange = (event, page) => {
    setPage(page);

    console.log("현재 페이지 : " + page);
  };

  const handleSearchMenuChange = event => {
    setSearchMenu(event.target.value);
  };

  const handleSearchClick = async () => {
    // TODO: 검색 버튼 클릭시 1페이지로 이동하기
    setSearch(searchInput.value);

    console.log("검색어 : " + search);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.sub_100.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const CreateButton = () => {
    // TODO: 공지사항의 경우 관리자만 쓸 수 있게 하기
    if (isLoggedIn) {
      return (
        <Button
          sx={{ m: 0, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
          component={Link}
          to="./create"
          startIcon={<CreateIcon />}
        >
          <Typography textAlign="left">작성하기</Typography>
        </Button>
      );
    } else {
      return <Box></Box>;
    }
  };

  const PostData = post => {
    switch (boardType) {
      case "freeBoard":
        return (
          <TableBody>
            {posts.map(post => (
              <TableRow key={post.freeBoardId}>
                <StyledTableCell component="th" scope="row" align="center">
                  {post.freeBoardId}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ maxWidth: "300px", textDecoration: "none" }}
                  align="center"
                  component={Link}
                  to={`./${post.freeBoardId}`}
                >
                  <Typography noWrap>{post.fbTitle}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.author.username}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.fbWriteTime}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        );
      case "battleBoard":
        return (
          <TableBody>
            {posts.map(post => {
              <TableRow key={post.battleBoardId} width="100%">
                <StyledTableCell component="th" scope="row" align="center">
                  {post.battleBoardId}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ maxWidth: "300px", textDecoration: "none" }}
                  align="center"
                  component={Link}
                  to={`./${post.battleBoardId}`}
                >
                  <Typography noWrap>{post.bbTitle}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.username}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {post.bbWriteTime}
                </StyledTableCell>
              </TableRow>;
            })}
          </TableBody>
        );
      default:
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
        <h3>&nbsp;&nbsp;{props.title}</h3>
        {/* 작성하기 버튼 */}
        <CreateButton />
      </Box>

      <Divider sx={{ mt: 1, mb: 4, width: "100%" }} />

      {/* 게시물 리스트 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">번호</StyledTableCell>
              <StyledTableCell sx={{ maxWidth: "300px" }} align="center">
                제목
              </StyledTableCell>
              <StyledTableCell align="center">작성자</StyledTableCell>
              <StyledTableCell align="center">등록일</StyledTableCell>
            </TableRow>
          </TableHead>
          <PostData />
          {/* <TableBody>
            <PostData />
            {/* {posts.map(post => (
              <PostData post={post} />
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Pagination
        sx={{ my: 3 }}
        count={maxPage} // 페이지 수
        showFirstButton
        showLastButton
        size="large"
        color="sub_300"
        onChange={handlePaginationChange}
      />
      {/* 검색 바 */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 검색 메뉴 */}
        <TextField
          id="search-menu"
          select
          value={searchMenu}
          onChange={handleSearchMenuChange}
          size="small"
          minWidth="200px"
        >
          <MenuItem key="title" value="title">
            제목
          </MenuItem>
          <MenuItem key="author" value="author">
            작성자
          </MenuItem>
        </TextField>
        {/* 검색어 입력창 */}
        <FormControl sx={{ mx: 2, width: "40%" }} variant="outlined">
          <OutlinedInput id="search-input" size="small" />
        </FormControl>
        {/* 검색 버튼 */}
        <Button
          sx={{ m: 0, color: "white" }}
          variant="contained"
          color="sub_300"
          size="large"
          onClick={handleSearchClick}
        >
          <Typography textAlign="left">검색</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default BoardList;
