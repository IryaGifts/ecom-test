// src/components/dashboard/SellerDashboard.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbarItems } from '../../redux/slices/navbarSlice';
import axios from 'axios';

const SellerDashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.navbar.items);
  const [navbarItems, setNavbarItemsState] = useState(items);

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
      {navbarItems.map((item, index) => (
        <TextField
          key={index}
          value={item}
          onChange={(event) => handleNavbarInputChange(index, event)}
          label={`Item ${index + 1}`}
          fullWidth
          margin="normal"
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleUpdateNavbar}>
        Update Navbar
      </Button>
    </div>
  );
};

export default SellerDashboard;
