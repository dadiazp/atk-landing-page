import NavItem from "../nav-item/NavItem";

const NavList = () => {
  return (
    <div className="hidden sm:ml-6 md:block">
      <div className="flex space-x-4">
        <NavItem label="Home" />
        <NavItem label="Products" />
        <NavItem label="Resources" />
        <NavItem label="Pricing" />
      </div>
    </div>
  );
};

export default NavList;
