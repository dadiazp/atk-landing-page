import { FC } from "react";
import NavItem from "../nav-item/Index";

interface MobileNavbarProps {
  isMenuOpen: boolean;
}
const MobileNavbar: FC<MobileNavbarProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`${isMenuOpen ? "hidden" : "block"} sm:hidden`}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2">
        <NavItem label="Home" />
        <NavItem label="Products" />
        <NavItem label="Resources" />
        <NavItem label="Pricing" />
      </div>
    </div>
  );
};

export default MobileNavbar;
