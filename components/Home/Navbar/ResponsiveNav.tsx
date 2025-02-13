"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showHandaler = () => setShowNav(true);
  const closeHandaler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav ={showHandaler}></Nav>
      <MobileNav showNav ={showNav}  closeNav ={closeHandaler}></MobileNav>
    </div>
  );
};

export default ResponsiveNav;
