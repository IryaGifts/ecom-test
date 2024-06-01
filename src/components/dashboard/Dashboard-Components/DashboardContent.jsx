import React from 'react';

const DashboardContent = ({ activeTab }) => {
  return (
    <div className="flex-1 p-7 bg-slate-100 w-5/7">
      {activeTab === 'home' && <div>Home</div>}
      {activeTab === 'orders' && <div>Orders</div>}
      {activeTab === 'products' && <div>Products</div>}
      {activeTab === 'customers' && <div>Customers</div>}
      {activeTab === 'analytics' && <div>Analytics</div>}
      {activeTab === 'marketing' && <div>Marketing</div>}
    </div>
  );
};

export default DashboardContent;
