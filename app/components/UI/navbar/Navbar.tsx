"use client";
import BurgueMenu from "@/app/assets/svg-components/BurguerMenu";
import Logo from "@/app/assets/svg-components/Logo";
import { useState } from "react";
import NavList from "./nav-list/Index";
import NavButtons from "./nav-buttons/Index";
import MobileNavbar from "./mobile-navbar/Index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="px-2 lg:px-16 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center sm:items-stretch sm:justify-start">
            <Logo />
            <NavList />
          </div>
          <div className="hidden md:block">
            <NavButtons />
          </div>
          <div className="items-center md:hidden">
            <BurgueMenu handleToggleMenu={handleToggleMenu} />
          </div>
        </div>
      </div>
      <MobileNavbar isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
