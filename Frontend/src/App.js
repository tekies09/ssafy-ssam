import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Footer from "./components/layout/Footer";
import Router from "./routes/router";

import { Provider, useSelector, useDispatch, connect } from "react-redux";
import store from "./store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Router />
          </Box>
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
