import { styled } from "@mui/system"; 
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

const CarouselWrapper = styled("div")({
  height: "50%",
  display: "flex",
  alignItems: "center",
});

const CarouselItem = styled(Link)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
});

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <CarouselItem to={`/coins/${coin.id}`} key={coin.id}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="85"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol.toUpperCase()} &nbsp;
          <span style={{ color: profit ? "rgb(14, 203, 129)" : "red", fontWeight: 500 }}>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </CarouselItem>
    );
  });

  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  return (
    <CarouselWrapper>
      <AliceCarousel
       mouseTracking
       infinite
       autoPlay
       autoPlayStrategy="none" 
       autoPlayInterval={1000} 
       animationDuration={1000} 
       disableDotsControls
       disableButtonsControls
       responsive={responsive}
       items={items}
       touchTracking={false}
      />
    </CarouselWrapper>
  );
  
};

export default Carousel;
