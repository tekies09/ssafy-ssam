import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      p={1}
      sx={{
        backgroundColor: "dark.main",
        color: "white",
        position: "fixed",
        width: "100%",
        bottom: 0,
      }}
    >
      <Typography variant="subtitle2">SSAM 2022</Typography>
    </Box>
  );
}
