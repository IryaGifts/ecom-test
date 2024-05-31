import React from "react";
import NavLinks from "./NavLinks";
import HeaderMenu from "./HeaderMenu";

function HeaderLower() {
  return (
    <>
      {/* <div className="bg-slate-100 w-full p-1  m-0">
        <NavLinks />
      </div> */}
      <div className="w-full px-3 flex justify-center ">
      <HeaderMenu/>
      </div>
    </>
  );
}

export default HeaderLower;
