import React from "react";
import { Box } from "@mui/material";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Comment = props => {
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
      {/* <CardHeader title="Title" /> */}
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
            <b>{props.comment.author}</b>
          </Typography>
          <Typography sx={{ color: "gray" }} textAlign="left" variant="caption">
            {props.comment.created_at}
          </Typography>
        </Box>
        <Typography textAlign="left" variant="caption">
          {props.comment.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ p: 0 }} aria-label="edit" size="large">
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ p: 0 }}
          aria-label="delete"
          size="large"
          color="sub_300"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    // <Box sx={{ width: "100%", p: 1 }}>
    //   {props.comment.author}
    //   {props.comment.created_at}
    //   {props.comment.content}
    // </Box>
  );
};

export default Comment;
