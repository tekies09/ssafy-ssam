import React, { useState } from "react";

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

const BoardList = props => {
  const [searchMenu, setSearchMenu] = useState("title");
  const [search, setSearch] = useState("");

  const mockData = [
    { id: 1, title: "1번째", author: "moontek", created_at: "2022-04-21" },
    { id: 2, title: "2번째", author: "honglim", created_at: "2022-04-21" },
    { id: 3, title: "3번째", author: "minjoo", created_at: "2022-04-21" },
    { id: 4, title: "4번째", author: "jaeyoung", created_at: "2022-04-21" },
    { id: 5, title: "5번째", author: "sunghan", created_at: "2022-04-24" },
    {
      id: 6,
      title:
        "6번째 제목입니다. 제목이 긴 경우 어떻게 처리하는지 확인하고자 제목을 길게 지어보았습니다.",
      author: "junghwan",
      created_at: "2022-04-24",
    },
    { id: 7, title: "7번째", author: "materialui", created_at: "2022-04-24" },
  ];

  const handleSearchMenuChange = event => {
    setSearchMenu(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    // TODO: 검색
    console.log(`${searchMenu} 검색 : ${search}`);

    setSearch("");
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
        <Button
          sx={{ m: 0, color: "white" }}
          variant="contained"
          color="mint"
          size="large"
          startIcon={<CreateIcon />}
        >
          <Typography textAlign="left">작성하기</Typography>
        </Button>
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
          <TableBody>
            {mockData.map(data => (
              <TableRow key={data.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {data.id}
                </StyledTableCell>
                <StyledTableCell sx={{ maxWidth: "300px" }} align="center">
                  <Typography noWrap>{data.title}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">{data.author}</StyledTableCell>
                <StyledTableCell align="center">
                  {data.created_at}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 페이지네이션 */}
      <Pagination
        sx={{ my: 3 }}
        count={10}
        showFirstButton
        showLastButton
        size="large"
        color="sub_300"
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
          <OutlinedInput
            id="search-input"
            value={search}
            onChange={handleSearchChange}
            size="small"
          />
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
