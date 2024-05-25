import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import CollectionPage from "./Pages/CollectionPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Collections" element={<CollectionPage/>} />
          <Route path="/Product" element={<ProductPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
