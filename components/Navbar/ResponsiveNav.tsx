"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

const ResponsizeNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div className="z-[1100]">
      <Nav openNav={handleNavShow} />
      <MobileNavbar showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsizeNav;
