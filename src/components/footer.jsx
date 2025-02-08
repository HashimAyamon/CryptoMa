import React from "react";
import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "gold",
        textAlign: "center",
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      
      <Box
        component="img"
        src="/logo.jpeg" 
        alt="Logo"
        sx={{ width: 199, height: 80 }}
      />

      
      <Box display="flex" gap={2}>
        <a href="https://github.com/HashimAyamon" target="_blank" rel="noopener noreferrer">
          <GitHub sx={{ color: "gold", fontSize: 30 }} />
        </a>
        <a href="https://www.linkedin.com/in/hashim-a-139a00269/" target="_blank" rel="noopener noreferrer">
          <LinkedIn sx={{ color: "gold", fontSize: 30 }} />
        </a>
      </Box>

      <Typography variant="body2" sx={{ fontFamily: "Montserrat", fontSize: 14 }}>
        {currentDate}
      </Typography>

      
      <Typography variant="body2" sx={{ fontFamily: "Montserrat", fontSize: 14 }}>
        © {new Date().getFullYear()} CryptoMa. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
