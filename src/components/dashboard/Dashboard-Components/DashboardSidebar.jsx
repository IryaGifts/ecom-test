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

function DashboardSidebar() {
  return (
    <div className="w-1/6 bg-slate-200	">
      {/* DashboardSidebar */}

      {/* THE mAIN LIST STARTS HERE */}

      <div className="mainList p-2">
        <ul>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <HomeIcon fontSize="small" />
            Home
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <InboxIcon fontSize="small" />
            Orders
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <SellRoundedIcon fontSize="small" />
            Products
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <PersonRoundedIcon fontSize="small" />
            Customers
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <PermMediaRoundedIcon fontSize="small" />
            Content
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <LeaderboardRoundedIcon fontSize="small" />
            Analytics
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <AdsClickRoundedIcon fontSize="small" />
            Marketing
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <PercentRoundedIcon fontSize="small" />
            Discounts
          </li>
        </ul>
      </div>

      {/* THE SALES CHANNEL LIST STARTS HERE */}

      <div className="salesChannelsList">
        <Box className="flex items-center justify-between p-2">
          <Typography variant="h6" fontSize={18}>
            Sales Channels
          </Typography>
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </Box>
        <ul>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <StoreRoundedIcon fontSize="small" />
            Online Store
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <ForwardToInboxRoundedIcon fontSize="small" />
            Inbox
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <FacebookRoundedIcon fontSize="small" />
            Meta Manager
          </li>
          <li className="flex items-center hover:bg-slate-100 rounded-md cursor-pointer gap-2 font-medium p-1">
            <CampaignRoundedIcon fontSize="small" />
            Campaign Manager
          </li>
        </ul>
      </div>

      {/* THE APP LIST STARTS HERE */}

      <div className="appsList">
        <Box className="flex items-center justify-between p-2">
          <Typography variant="h6" fontSize={18}>
            Apps
          </Typography>
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </Box>
      </div>
    </div>
  );
}

export default DashboardSidebar;
