import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Close from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";

const PostDeleteModal = props => {
  let modalOpen = useSelector(state => state.modal.deletePost);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boardType = useSelector(state => state.boardType);

  const handleClose = () => {
    dispatch({ type: "closePostDeleteModal" });
  };

  const doNavigate = async () => {
    if (boardType === "freeBoard") {
      await navigate("/board/free");
    } else if (boardType === "battleBoard") {
      await navigate("/board/battle");
    } else {
      await navigate("/board/notice");
    }
  };

  const handleDeleteClick = async () => {
    let deleteUrl = "";
    let urlArr = window.location.pathname.split("/");
    let boardId = urlArr[urlArr.length - 1];

    if (boardType === "freeBoard") {
      deleteUrl = `/free/delete/${boardId}`;
    } else if (boardType === "battleBoard") {
      deleteUrl = `/battle/delete/${boardId}`;
    } else {
      deleteUrl = `/notice/delete/${boardId}`;
    }

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "DELETE",
      url: deleteUrl,
    })
      .then(res => {
        doNavigate();
        handleClose();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Dialog onClose={handleClose} open={modalOpen}>
        <IconButton
          edge="end"
          onClick={handleClose}
          sx={{ position: "absolute", right: 20, top: 10 }}
        >
          <Close />
        </IconButton>
        <DialogContent sx={{ p: 0, mt: 6, mb: 1, ml: 3, mr: 6 }}>
          <Typography variant="body1">
            삭제된 글은 복구할 수 없습니다.
          </Typography>
          <Typography variant="body1">정말로 삭제하시겠습니까?</Typography>
        </DialogContent>
        <Box
          sx={{
            my: 1,
            mx: 2,
            "& .MuiButton-root": { borderRadius: 20 },
          }}
        >
          <DialogActions>
            <Button onClick={handleDeleteClick} fullWidth variant="contained">
              확인
            </Button>
          </DialogActions>
          <DialogActions>
            <Button onClick={handleClose} fullWidth variant="outlined">
              취소
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PostDeleteModal;
