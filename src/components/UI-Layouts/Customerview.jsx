import React from 'react'
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';
import { Outlet } from 'react-router-dom';


const CustomerView = () => (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
  
export default CustomerView