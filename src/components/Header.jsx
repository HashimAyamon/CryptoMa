import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <Box
                component="img"
                src="/logo.jpeg"
                alt="CryptoMa Logo"
                sx={{ width: 220, height: 60 }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "gold",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                {/* CryptoMa */}
              </Typography>
            </Box>

            <Select
              variant="outlined"
              value={currency}
              sx={{ width: 100, height: 40, marginLeft: 2, color: "white" }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
