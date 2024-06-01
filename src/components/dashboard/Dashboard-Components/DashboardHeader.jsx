import { Typography } from "@mui/material";
import React from "react";

function DashboardHeader() {
  return (
    <div className="bg-black">
      <Typography variant="h5" p={1} color={"white"}>
        Seller Dashboard
      </Typography>
    </div>
  );
}

export default DashboardHeader;
