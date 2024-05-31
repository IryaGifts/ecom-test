// Navbar.jsx
import React from "react";
import AnnouncementBar from "./AnnouncementBar/AnnouncementBar";
import HeaderLower from "./LowerNav/HeaderLower";
import HeaderUpper from "./UpperNav/HeaderUpper";

const Navbar = () => {
  const announcements = [
    "Hurry Up! It is 40% Discount on Jackets.",
    "announcement-2",
    "announcement-3",
    "announcement-4",
    "announcement-5",
  ];
  return (
    <>
      <AnnouncementBar announcements={announcements} />

      <nav className="bg-white bg-opacity-75 pt-4 sticky top-0 z-50">
       <HeaderUpper/>
        <HeaderLower/>
      </nav>
      <div className="thin-line"> </div>
    </>
  );
};

export default Navbar;
