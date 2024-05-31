import { Box, Breadcrumbs, Chip, Typography } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

function ProductInfoBlock() {
  return (
    <div className="justify-center flex flex-col items-center">
      ProductInfoBlock
      <Breadcrumb/>
      <Typography
        className="Product-Title text-2xl mx-auto p-1 font-bold"
        variant="h5"
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Box className="review-badge  ">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <Chip label="486 Reveiws" />
      </Box>
      <Typography>₹1,789/-</Typography>
    </div> 
  );
}

export default ProductInfoBlock;
