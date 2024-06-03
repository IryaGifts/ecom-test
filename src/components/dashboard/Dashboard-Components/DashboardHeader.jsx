import { Typography } from "@mui/material";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../@/components/ui/avatar";
import { Link } from "react-router-dom";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

function DashboardHeader() {
  return (
    <div className="bg-black flex justify-between px-5 ">
      <Typography variant="h5" p={1} color={"white"}>
        Seller Dashboard
      </Typography>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link to="/">Visit the store <ArrowOutwardRoundedIcon fontSize="small"/></Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DashboardHeader;
