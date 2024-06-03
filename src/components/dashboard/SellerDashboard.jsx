// src/components/dashboard/SellerDashboard.jsx
import React, { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarItems } from "../../redux/slices/navbarSlice";
import axios from "axios";
import NavLinks from "../Common/Navbar/LowerNav/NavLinks";
import ProductForm from "./ProductForm";
import NavbarSetting from "./NavbarSetting";
import DashboardHeader from "./Dashboard-Components/DashboardHeader";
import DashboardSidebar from "./Dashboard-Components/DashboardSidebar";
import DashboardContent from "./Dashboard-Components/DashboardContent";
import { Button } from "../@/components/ui/button";

const SellerDashboard = () => {

  return (
    <div>
      <DashboardHeader />
      <div className="flex w-full">
        <DashboardSidebar />
        <DashboardContent />
      </div>
      <Button variant="ghost">ghost button</Button>
      <Button variant="contained" color="primary">
        Update Navbar
      </Button>
      <NavbarSetting />
      <ProductForm />
    </div>
  );
};

export default SellerDashboard;
