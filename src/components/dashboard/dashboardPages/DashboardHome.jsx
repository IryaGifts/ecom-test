import React, { useState, useEffect } from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ProductCard from '../../Common/Product/ProductCard';
import ProductSkeleton from '../../Common/Product/ProductSkeleton';
import ProductGrid from '../../Common/Product/ProductGrid';

function DashboardHome() {
    const [salesData, setSalesData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  
    useEffect(() => {
      // Fetch sales revenue data for the default date range
      fetchSalesData(startDate, endDate);
    }, []);
  
    const fetchSalesData = (start, end) => {
      // Fetch sales revenue data for the specified date range from the backend
      // Update the state with the fetched data
      // For this example, let's assume the fetched data is an array of objects with date and revenue fields
      const fetchedData = [
        { date: '2022-01-01', revenue: 100 },
        { date: '2022-01-02', revenue: 150 },
        { date: '2022-01-03', revenue: 200 },
        { date: '2022-01-04', revenue: 180 },
        { date: '2022-01-05', revenue: 220 },
        { date: '2022-01-06', revenue: 350 },
        { date: '2022-01-07', revenue: 280 },
        // Add more data here
      ];
      setSalesData(fetchedData);
    };
  
    const handleDateChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      fetchSalesData(start, end);
    };

  return <div>
    DashboardHome 
    Welcome to Home Page 
    Working in Progress
    <Gauge width={100} height={100} value={60} />
<span className="bg-white rounded-lg flex m-0 p-0">
      <ResponsiveContainer width="45%" height={200}>
        <LineChart data={salesData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </span>
    </div>;
}

export default DashboardHome;
