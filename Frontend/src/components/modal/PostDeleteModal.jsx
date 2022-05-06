import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Close from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";

const PostDeleteModal = props => {
  const { open, setOpen } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    console.log("게시글 삭제");

    // TODO: 게시글 삭제 후 게시글 목록 페이지로 리다이렉트
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
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
