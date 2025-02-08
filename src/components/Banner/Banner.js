import { Container, Typography } from "@mui/material"; // ✅ Updated imports
import { styled } from "@mui/system"; // ✅ Using styled instead of makeStyles
import Carousel from "./Carousel";

// Define styles using styled from @mui/system
const BannerWrapper = styled("div")({
  backgroundImage: "url(./banner2.jpg)",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export default function Banner() {
  return (
    <BannerWrapper>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            fontFamily: "Montserrat",
          }}
        >
          Crypto Hunter
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "darkgrey",
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}
        >
          Get all the Info regarding your favorite Crypto Currency
        </Typography>
      </Container>
      <Carousel />
    </BannerWrapper>
  );
}
