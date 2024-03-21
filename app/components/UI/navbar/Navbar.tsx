"use client";
import BurgueMenu from "@/app/assets/svg-components/BurguerMenu";
import Logo from "@/app/assets/svg-components/Logo";
import { FC, useState } from "react";
import NavList from "./nav-list/NavList";
import NavButtons from "./nav-buttons/NavButtons";
import MobileNavbar from "./mobile-navbar/MobileNavbar";
import Text, { TextColorEnum, TextWeightEnum } from "../text/Text";

interface NavbarProps {
  footer?: boolean;
}

const Navbar: FC<NavbarProps> = ({ footer = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="px-2 lg:px-16">
        <div
          className={`relative flex ${
            footer ? "flex-col border-t" : "sm:flex-row"
          } h-16 items-start sm:items-center py-5 sm:py-0 justify-between `}
        >
          <div className="flex items-center sm:items-stretch sm:justify-start">
            <Logo />
            {!footer && <NavList />}
          </div>
          {!footer ? (
            <>
              <div className="hidden md:block">
                <NavButtons />
              </div>
              <div className="items-center md:hidden">
                <BurgueMenu handleToggleMenu={handleToggleMenu} />
              </div>
            </>
          ) : (
            <Text
              fontWeightVariant={TextWeightEnum["font-normal"]}
              colorVariant={TextColorEnum["text-tertiary-footer"]}
              className="py-3 sm:py-0"
            >
              © 2077 Untitled UI. All rights reserved.
            </Text>
          )}
        </div>
      </div>
      {!footer && <MobileNavbar isMenuOpen={isMenuOpen} />}
    </nav>
  );
};

export default Navbar;
