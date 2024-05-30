import { Box } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/Slider/ProductGallerySlider.css";

function ProductImageGallery({ images }) {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const thumbnailSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    asNavFor: mainSliderRef.current,
    ref: thumbnailSliderRef,
    infinite: true,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: thumbnailSliderRef.current,
    ref: mainSliderRef,
  };

  return (
    <div className="product-gallery flex">
      <div className="thumbnail-slider w-1/6">
        <Slider {...thumbnailSettings}>
          {images.map((image, index) => (
            <Box
              key={index}
              component="div"
              className="flex justify-center mb-4"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-auto"
              />
            </Box>
          ))}
        </Slider>
      </div>
      <div className="main-slider w-5/6">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <Box
              key={index}
              component="section"
              className="flex justify-center h-"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-96 w-full object-contain"
              />
            </Box>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductImageGallery;
