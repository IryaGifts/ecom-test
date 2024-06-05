// src/components/ProductSkeleton.jsx

import React from 'react';
import { Skeleton } from '../../@/components/ui/Skeleton';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductSkeleton = () => {
  return (
    
    <Card className="max-w-xs m-2">
      <CardMedia>
        <Skeleton className="h-36 w-full" />
      </CardMedia>
      <CardContent>
        <Skeleton className="h-8 mb-2" />
        <Skeleton className="h-4 mb-4" />
        <div className="flex justify-between items-center mt-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSkeleton;
