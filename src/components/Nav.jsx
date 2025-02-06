import {
  AppBar,
  MenuItem,
  Container,
  Select,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Roboto",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Nav = () => {
  const classes = useStyle();
  const navigate = useNavigate(); 
const  darkTheme=createTheme({
  palette: {
    primary:{
      main: '#fff',
    },
    type:'dark',
  }
})


  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} className={classes.title} variant="h6">
            CryptoMa
          </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Nav;
