import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // ✅ Use `useNavigate`
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark", // ✅ Use `mode` instead of `type`
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate(); // ✅ Replaces `useHistory`

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")} // ✅ Use `navigate`
              variant="h6"
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Crypto Hunter
            </Typography>

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
