import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';

const DashboardSidebar = ({ onTabChange, activeTab }) => {
  const getClassNames = (tab) => {
    return `flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1 ${activeTab === tab ? 'bg-slate-50	' : ''}`;
  };

  return (
    <div className="w-1/6 bg-slate-200 h-full fixed z-10">
      <div className="mainList p-2 mb-2">
        <ul>
          <li className={getClassNames('home')} onClick={() => onTabChange('home')}>
            <HomeIcon fontSize="small" />
            Home
          </li>
          <li className={getClassNames('orders')} onClick={() => onTabChange('orders')}>
            <InboxIcon fontSize="small" />
            Orders
          </li>
          <li className={getClassNames('products')} onClick={() => onTabChange('products')}>
            <SellRoundedIcon fontSize="small" />
            Products
          </li>
          <li className={getClassNames('customers')} onClick={() => onTabChange('customers')}>
            <PersonRoundedIcon fontSize="small" />
            Customers
          </li>
          <li className={getClassNames('content')} onClick={() => onTabChange('content')}>
            <PermMediaRoundedIcon fontSize="small" />
            Content
          </li>
          <li className={getClassNames('analytics')} onClick={() => onTabChange('analytics')}>
            <LeaderboardRoundedIcon fontSize="small" />
            Analytics
          </li>
          <li className={getClassNames('marketing')} onClick={() => onTabChange('marketing')}>
            <AdsClickRoundedIcon fontSize="small" />
            Marketing
          </li>
          <li className={getClassNames('discounts')} onClick={() => onTabChange('discounts')}>
            <PercentRoundedIcon fontSize="small" />
            Discounts
          </li>
        </ul>
      </div>

      <div className="salesChannelsList p-2 mb-2">
        <Box className="flex items-center justify-between p-2 cursor-pointer">
          <Typography variant="h6" fontSize={18} fontWeight={600}>
            Sales Channels
          </Typography>
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </Box>
        <ul>
          <li className={getClassNames('onlineStore')} onClick={() => onTabChange('onlineStore')}>
            <StoreRoundedIcon fontSize="small" />
            Online Store
          </li>
          <li className={getClassNames('inbox')} onClick={() => onTabChange('inbox')}>
            <ForwardToInboxRoundedIcon fontSize="small" />
            Inbox
          </li>
          <li className={getClassNames('metaManager')} onClick={() => onTabChange('metaManager')}>
            <FacebookRoundedIcon fontSize="small" />
            Meta Manager
          </li>
          <li className={getClassNames('campaignManager')} onClick={() => onTabChange('campaignManager')}>
            <CampaignRoundedIcon fontSize="small" />
            Campaign Manager
          </li>
        </ul>
      </div>

      <div className="appsList p-2 mb-2">
        <Box className="flex items-center justify-between p-2 cursor-pointer">
          <Typography variant="h6" fontSize={18} fontWeight={600}>
            Apps
          </Typography>
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </Box>
        <ul>
          <li className={getClassNames('reviews')} onClick={() => onTabChange('reviews')}>
            <RateReviewRoundedIcon fontSize="small" />
            Reviews
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
