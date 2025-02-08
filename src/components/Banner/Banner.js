import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "./Carousel";

const BannerWrapper = styled("div")({
  backgroundImage: "url(./banner2.jpg)",
  height: "550px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
});

export default function Banner() {
  return (
    <BannerWrapper>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            src="/logo.jpeg"
            alt="CryptoMa Logo"
            
            sx={{ width: 390, height: 220, marginBottom: 1 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontFamily: "Montserrat",
            }}
          >
            {/* CryptoMa */}
          </Typography>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            color: "gold",
            textTransform: "capitalize",
            fontFamily: "Montserrat",
            fontWeight: "medium",
          }}
        >
          Stay informed with the latest updates on your favorite cryptocurrency.
        </Typography>
      </Container>
      <Carousel />
    </BannerWrapper>
  );
}
