import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CartSidebar from "../../Sections/SideBars/CartSidebar";
import { IconButton, TextField } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const NavIcons = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Assuming 3 items in cart for example
  const searchRef = useRef(null);
  const accountRef = useRef(null);
  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
    if (accountRef.current && !accountRef.current.contains(event.target)) {
      setAccountOpen(false);
    }
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <IconButton
          className="text-blue-900 text-xl cursor-pointer"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <SearchIcon />
        </IconButton>

        {searchOpen && (
          <div
            ref={searchRef}
            className=" absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg"
          >
            <TextField className="m-4" label="search..." variant="outlined"></TextField>
          </div>
        )}
      </div>
      <div className="relative">
        <IconButton
          aria-label="cart"
          className=" text-xl cursor-pointer"
          onClick={() => setAccountOpen(!accountOpen)}
        >
          <AccountCircleIcon />
        </IconButton>
        {accountOpen && (
          <div
            ref={accountRef}
            className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg"
          >
            <div className="p-4">
              <p className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                Login/Signup
              </p>
              {/* If logged in, replace above line with:
              <p className="cursor-pointer hover:bg-gray-200 p-2 rounded">My Account</p>
              <p className="cursor-pointer hover:bg-gray-200 p-2 rounded">Orders</p>
              <p className="cursor-pointer hover:bg-gray-200 p-2 rounded">Logout</p>
              */}
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <IconButton
          aria-label="cart"
          className="text-blue-900 text-xl cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
        {cartItems > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1">
            {cartItems}
          </span>
        )}
        {cartOpen && (
          <div
            ref={cartRef}
            className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg"
          >
            <CartSidebar />
          </div>
        )}
      </div>
      <div className="relative">
        <Link to="/Seller-Dashboard">
          <IconButton className="text-blue-900 text-xl cursor-pointer">
            <DashboardIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default NavIcons;
