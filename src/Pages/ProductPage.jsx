import React from "react";
import ProductImageGallery from "../components/ProductPage/ProductImageGallery";
// import { NavigationMenu } from "../ui/navigation-menu";

const ProductPage = () => {

  const images = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d76b79fd-e11d-458d-8177-fa1746921e21/revolution-7-road-running-shoes-Dfvsch.png',
    'https://contents.mediadecathlon.com/p2153171/61179e52ed0b3a1b4fdbddf2cfd168c5/p2153171.jpg?format=auto&quality=70&f=650x0',
  ]

  
  return (
    <>
     <ProductImageGallery images={images} />
    </>
  );
};

export default ProductPage;
