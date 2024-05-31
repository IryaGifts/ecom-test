// src/components/dashboard/SellerDashboard.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbarItems } from '../../redux/slices/navbarSlice';
import axios from 'axios';
import NavLinks from '../Common/Navbar/LowerNav/NavLinks';
import ProductForm from './ProductForm';
import NavbarSetting from './NavbarSetting';


const SellerDashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.navbar.items);
  const [navbarItems, setNavbarItemsState] = useState(items || []);

  useEffect(() => {
    axios.get('/api/navbar').then((response) => {
      setNavbarItemsState(response.data.items);
    });
  }, []);

  const handleUpdateNavbar = () => {
    axios.put('/api/navbar', { items: navbarItems }).then((response) => {
      dispatch(setNavbarItems(response.data.items));
      alert('Navbar items updated successfully!');
    });
  };

  const handleNavbarInputChange = (index, event) => {
    const newNavbarItems = [...navbarItems];
    newNavbarItems[index] = event.target.value;
    setNavbarItemsState(newNavbarItems);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Seller Dashboard</Typography>
      <Typography variant="h5" gutterBottom>Navbar Items</Typography>
            {/* Pass navbarItems data to NavLinks component */}
            <NavLinks navbarItems={navbarItems} />

      <Button variant="contained" color="primary" onClick={handleUpdateNavbar}>
        Update Navbar
      </Button>
      <NavbarSetting/>
      <ProductForm/>

    </div>
  );
};

export default SellerDashboard;
