import { LinearProgress, Typography } from "@mui/material"; 
import { styled } from "@mui/system"; 
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"; 
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const Sidebar = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
});

export default function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Container>
      <Sidebar>
        <img src={coin.image.large} alt={coin.name} height="200" style={{ marginBottom: 20 }} />
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          {coin.name}
        </Typography>
        <Typography variant="subtitle1">
          {parse(coin.description.en.split(". ")[0])}
        </Typography>
      </Sidebar>
      <CoinInfo coin={coin} />
    </Container>
  );
}
