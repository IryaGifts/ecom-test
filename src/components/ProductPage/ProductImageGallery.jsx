import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Thumbnail = styled.div`
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    border: 2px solid #000;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductImageGallery = ({ images }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsMain = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    ref: (slider) => setNav2(slider),
  };

  return (
    <Box className="w-full h-[50vh] flex">
      <Box className="w-1/6 flex flex-col items-center justify-center overflow-hidden">
        <Slider {...settingsThumbs}>
          {images.map((image, index) => (
            <Thumbnail key={index} className={index === currentSlide ? 'active' : ''}>
              <ThumbnailImage src={image} alt={`Thumbnail ${index + 1}`} />
            </Thumbnail>
          ))}
        </Slider>
      </Box>
      <Box className="w-5/6">
        <Slider {...settingsMain}>
          {images.map((image, index) => (
            <Box key={index} className="h-[50vh]">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductImageGallery;
