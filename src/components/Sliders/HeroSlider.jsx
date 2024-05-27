import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const HeroSlider = () => {
  const isMobile = useMediaQuery("(max-width:480px");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Slide 1",
      description: "This is the first slide",
      desktopImage:
        "https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg",
      mobileImage: "",
      buttonText: "Shop Now",
    },
    {
      title: "Slide 2",
      description: "This is the second slide",
      desktopImage:
        "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg",
      mobileImage: "",
      buttonText: "Shop Now",
    },
    {
      title: "Slide 3",
      description: "This is the third slide",
      desktopImage:
        "https://4.bp.blogspot.com/-j08zU37hpt4/W5aaDndpsWI/AAAAAAAAFoc/tq-c11-V1sgMDyFd5cB3Z6jsO2UICZiQgCK4BGAYYCw/s1600/CL-Banner.jpg",
      mobileImage: "",
      buttonText: "Shop Now",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: "72vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${
              isMobile ? slide.mobileImage : slide.desktopImage
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Box>
            <Typography variant="h3">{slide.title}</Typography>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              {slide.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px" }}
              startIcon={<LocalMallIcon />}
            >
              {slide.buttonText}
            </Button>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider;
