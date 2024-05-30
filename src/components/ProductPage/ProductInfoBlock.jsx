import { Box, Breadcrumbs, Chip, Typography } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/StarBorder";

function ProductInfoBlock() {
  return (
    <div>
      ProductInfoBlock
      <Typography
        className="Product-Title text-2xl mx-auto p-1 text-center"
        variant="h5"
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Box className="review-badge flex justify-center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <Chip label="486 Reveiws" />
      </Box>
    </div>
  );
}

export default ProductInfoBlock;
