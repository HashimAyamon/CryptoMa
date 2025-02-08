import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#14161a", color: "white", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
