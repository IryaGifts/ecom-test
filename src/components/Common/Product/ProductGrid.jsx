// src/components/ProductGrid.jsx

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import Slider from 'react-slick';
import { fetchProducts } from '../../../services/shopifyService';


const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopifyProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products from Shopify:', error);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchShopifyProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto my-8">
      {loading ? (
        <div className="flex flex-wrap justify-center">
          {Array.from(new Array(3)).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <Slider {...settings}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductGrid;
