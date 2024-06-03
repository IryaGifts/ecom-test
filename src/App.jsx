import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Customerview from "./components/UI-Layouts/Customerview"; 
import SellerView from "./components/UI-Layouts/SellerView";

import HomePage from "./Pages/HomePage";
import CollectionPage from "./Pages/CollectionPage";
import ProductPage from "./Pages/ProductPage";
import SellerDashboard from "./components/dashboard/SellerDashboard";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Customer View Routes */}
          <Route element={<Customerview />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Route>

          {/* Seller View Routes */}
          <Route element={<SellerView />}>
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
