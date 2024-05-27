import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Navigation</Typography>
            <nav>
              <ul>
                <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link href="/products" className="text-white hover:text-gray-300">Products</Link></li>
                <li><Link href="/about" className="text-white hover:text-gray-300">About Us</Link></li>
                <li><Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Social Media</Typography>
            <ul>
              <li><Link href="https://www.facebook.com/example" className="text-white hover:text-gray-300">Facebook</Link></li>
              <li><Link href="https://twitter.com/example" className="text-white hover:text-gray-300">Twitter</Link></li>
              <li><Link href="https://www.instagram.com/example" className="text-white hover:text-gray-300">Instagram</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <p className="text-white">Email: info@example.com</p>
            <p className="text-white">Phone: +123456789</p>
            <p className="text-white">Address: 123 Street, City, Country</p>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" color="textSecondary" className="mt-6">
          &copy; 2024 Scoooby India Pvt. Ltd. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
