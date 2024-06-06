import React from 'react';
import DashboardHome from '../dashboardPages/DashboardHome';
import DashboardOrders from '../dashboardPages/DashboardOrders';
import DashboardProducts from '../dashboardPages/DashboardProducts';

const DashboardContent = ({ activeTab }) => {
  return (
    <div className="flex-1 p-7 bg-slate-100 w-5/6 absolute right-0 z-0">
      {activeTab === 'home' && <DashboardHome/>}
      {activeTab === 'orders' && <DashboardOrders/>}
      {activeTab === 'products' && <DashboardProducts/>}
      {activeTab === 'customers' && <div>Customers</div>}
      {activeTab === 'analytics' && <div>Analytics</div>}
      {activeTab === 'content' && <div>Content</div>}
      {activeTab === 'marketing' && <div>Marketing</div>}
      {activeTab === 'discounts' && <div>Discounts</div>}
      {activeTab === 'settings' && <div>Settings</div>}
    </div>
  );
};

export default DashboardContent;
