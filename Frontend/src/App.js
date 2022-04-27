import React from "react"
import "./App.css";
import Header from "./components/Header";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main"

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
          <Sidebar />
          <div sx={{ flexGrow: 1 }}>
            <Main />
          </div>
        </Box>
        <footer>
          <p>footer 자리</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
