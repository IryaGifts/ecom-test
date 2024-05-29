import { useState } from "react";

import "./App.css";
import Navbar from "./components/Common/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import HomePage from "./Pages/HomePage";
import CollectionPage from "./Pages/CollectionPage";
import ProductPage from "./Pages/ProductPage";
import SellerDashboard from "./components/dashboard/SellerDashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Collections" element={<CollectionPage />} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/Seller-Dashboard" element={<SellerDashboard />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
