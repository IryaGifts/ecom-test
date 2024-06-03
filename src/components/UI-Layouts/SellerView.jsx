import React from 'react';
import { Outlet } from 'react-router-dom';

const SellerView = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

export default SellerView;
