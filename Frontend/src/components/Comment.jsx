import React, { useState } from "react";
import { Box } from "@mui/material";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentDeleteModal from "./modal/CommentDeleteModal";
import { useDispatch, useSelector } from "react-redux";

const Comment = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const UpdateAndDeleteButton = () => {
    // 현재 사용자가 댓글 작성자인 경우에만 수정/삭제 댓글 표시
    if (user.nickname !== props.comment.nickname) {
      return <Box></Box>;
    } else {
      return (
        <CardActions>
          <IconButton sx={{ p: 0 }} aria-label="edit" size="large">
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ p: 0 }}
            aria-label="delete"
            size="large"
            color="sub_300"
            onClick={() => {
              dispatch({ type: "openCommentDeleteModal" });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      );
    }
  };

  return (
    <Card
      elevation={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderLeft: 3,
        my: 1,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            pl: 1,
            pr: 2,
          }}
          minWidth="110px"
        >
          <Typography textAlign="left" variant="subtitle2">
            <b>{props.comment.nickname}</b>
          </Typography>
          <Typography sx={{ color: "gray" }} textAlign="left" variant="caption">
            {props.comment.fbWriteTime.substring(0, 10)}
          </Typography>
        </Box>
        <Typography textAlign="left" variant="caption">
          {props.comment.content}
        </Typography>
      </CardContent>
      <UpdateAndDeleteButton />
      {/* <CardActions>
        <IconButton sx={{ p: 0 }} aria-label="edit" size="large">
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ p: 0 }}
          aria-label="delete"
          size="large"
          color="sub_300"
          onClick={() => {
            dispatch({ type: "openCommentDeleteModal" });
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
      {/* 댓글 삭제 확인 모달 */}
      <CommentDeleteModal />
    </Card>
  );
};

export default Comment;
