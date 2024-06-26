import React from "react";
import NavIcons from "./NavIcons";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "../LowerNav/HeaderMenu";

function HeaderUpper() {
  return (
    <div className="container mx-auto flex justify-around items-center">
      {/* Logo or brand */}
      <a href="#" className="text-black text-lg font-bold">
        Your Brand
      </a>
      <div className="flex w-full max-w-2xl items-center ml-3 gap-2 ">
        <Input
          type="search"
          placeholder="Search..."
          className="z-50 bg-opacity-75"
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <HeaderMenu />
      <NavIcons />
    </div>
  );
}

export default HeaderUpper;
