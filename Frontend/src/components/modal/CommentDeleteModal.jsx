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

const CommentDeleteModal = props => {
  const modalOpen = useSelector(state => state.modal.deleteComment);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: "closeCommentDeleteModal" });
  };

  const handleDeleteClick = async () => {
    console.log("댓글 삭제");

    await axios({
      baseURL: process.env.REACT_APP_SERVER_URL,
      timeout: 3000,
      method: "DELETE",
      url: `/free/${props.boardId}/comments/${props.replyId}/`,
    })
      .then(res => {
        console.log(res.data);

        window.location.reload();
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
          <Typography variant="body1">댓글을 삭제하시겠습니까?</Typography>
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

export default CommentDeleteModal;
