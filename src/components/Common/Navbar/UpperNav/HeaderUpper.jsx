import React from "react";
import NavIcons from "./NavIcons";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import SearchIcon from "@mui/icons-material/Search";

function HeaderUpper() {
  return (
    <div className="container mx-auto flex justify-around items-center">
      {/* Logo or brand */}
      <a href="#" className="text-black text-lg font-bold">
        Your Brand
      </a>
      <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input type="search" placeholder="Search..." className="bg-opacity-75" />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <NavIcons />
    </div>
  );
}

export default HeaderUpper;
