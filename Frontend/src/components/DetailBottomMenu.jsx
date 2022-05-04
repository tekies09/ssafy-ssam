import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

const DetailBottomMenu = props => {
  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleBackToTopClick = event => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    return (
      <Button sx={{ color: "white", zIndex: 0 }} in={trigger}>
        <Box
          onClick={handleBackToTopClick}
          role="presentation"
          // sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Button>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          p: 2,
        }}
      >
        {/* 수정, 삭제 버튼 */}
        <Box>
          <Button
            sx={{ m: 1, p: 1, color: "white" }}
            variant="contained"
            color="sub_300"
            size="large"
            component={Link}
            to="./update"
          >
            <Typography textAlign="left">수정</Typography>
          </Button>
          <Button
            sx={{ m: 1, p: 1, color: "white" }}
            variant="contained"
            color="mint"
            size="large"
          >
            <Typography textAlign="left">삭제</Typography>
          </Button>
        </Box>

        {/* 목록, backToTop 버튼 */}
        <Box>
          <Button
            sx={{ m: 1, p: 1, color: "white" }}
            variant="contained"
            color="sub_300"
            size="large"
            component={Link}
            to="./.."
          >
            <Typography textAlign="left">목록</Typography>
          </Button>
          <ScrollTop {...props}>
            <Fab
              sx={{ m: 0 }}
              color="secondary"
              size="small"
              aria-label="scroll back to top"
            >
              <KeyboardArrowUpIcon sx={{ color: "white" }} />
            </Fab>
          </ScrollTop>
        </Box>
      </Box>
    </>
  );
};

export default DetailBottomMenu;
