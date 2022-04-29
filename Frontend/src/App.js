import React from "react";
import "./App.css";
import Header from "./components/Header";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Footer from "./components/Footer";
import Router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
