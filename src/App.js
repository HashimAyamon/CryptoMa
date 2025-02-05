import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage exact/>} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
