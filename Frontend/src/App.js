import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import "./App.css";
import Header from "./components/Header";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Footer from "./components/Footer";
import Router from "./routes/router";

import { Provider, useSelector, useDispatch, connect } from 'react-redux'

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      user: {
        isLoggedIn: false
      }
    }
  }
  const newState = { ...currentState }
  return newState
}

const store = configureStore({reducer: reducer})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Header />
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
