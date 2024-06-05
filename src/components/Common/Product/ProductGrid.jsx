// src/components/ProductGrid.jsx

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import Slider from "react-slick";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching data from backend server
    setTimeout(() => {
      fetch("https://api.example.com/products") // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product data:", error));
    }, 2000);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto my-8">
        {loading ? (
          <div className="flex flex-wrap justify-center ">
            {Array.from(new Array(5)).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
