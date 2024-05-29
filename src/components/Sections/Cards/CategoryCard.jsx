import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';


function CategoryCard() {
  return (
<Card>
    <CardMedia 
component="img"
alt="CategoryName"
height="140"
image='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d76b79fd-e11d-458d-8177-fa1746921e21/revolution-7-road-running-shoes-Dfvsch.png'
    />
</Card> 
)
}

export default CategoryCard