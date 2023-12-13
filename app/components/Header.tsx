import React from "react";
import { Navbar, Themes } from ".";

const Header = () => {
  return (
    <div className=" max-w-7xl mx-auto px-6 pt-1">
      <Navbar />
      <Themes />
    </div>
  );
};

export default Header;
