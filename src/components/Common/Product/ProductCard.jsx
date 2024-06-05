// src/components/ProductCard.jsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button } from '../../@/components/ui/button';
// import { Card, CardContent, CardMedia, Typography, Button } 

const ProductCard = ({ product }) => {
  return (
    
    <Card className="max-w-xs m-4">
      <CardMedia
        component="img"
        alt="Product"
        height="140"
        image="https://expertphotography.b-cdn.net/wp-content/uploads/2020/11/product-photography-tips-17-1.jpg"
        title="Lorem Ipsum"
      />
      <CardContent>
        <Typography component='h3' className="text-lg font-bold mb-2">Lorem ipsum dolor sit.</Typography>
        <Typography className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.</Typography>
        <div className="flex justify-between items-center mt-2">
          <Typography className="text-xl font-bold">$1199</Typography>
          <Button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
