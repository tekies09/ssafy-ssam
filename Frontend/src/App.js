import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Sidebar from "./components/Sidebar";

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
            <p>메인 화면 자리</p>
            <Button variant="contained" color="primary">
              버튼 Primary
            </Button>
            <Button variant="contained" color="secondary">
              버튼 Secondary
            </Button>
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
