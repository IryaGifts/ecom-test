// Navbar.jsx
import React from "react";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import HeaderIcons from "./headerIcons";
import NavLinks from "./NavLinks";

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

      <nav className="bg-white bg-opacity-75 py-4 sticky top-0">
        <div className="container mx-auto flex justify-around items-center">
          {/* Logo or brand */}
          <a href="#" className="text-black text-lg font-bold">
            Your Brand
          </a>
          <NavLinks />
          <HeaderIcons />
        </div>
      </nav>
      <div className="thin-line"> </div>
    </>
  );
};

export default Navbar;
