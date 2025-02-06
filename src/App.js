import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles"; // Correct import
import "./App.css";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Nav from "./components/Nav";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh", // Fixed 'minheight' typo (should be 'minHeight')
  },
}));

function App() {
  const classes = useStyles(); // Call hook inside component
  
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
