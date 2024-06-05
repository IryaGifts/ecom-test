import React from "react";
import HeroSlider from "../components/Sections/Sliders/HeroSlider";
import CategoryCircleSlider from "../components/Sections/Sliders/CategoryCircleSlider";
import ProductGrid from "../components/Common/Product/ProductGrid";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />

      <ProductGrid />

      <CategoryCircleSlider />
    </div>
  );
};

export default HomePage;
