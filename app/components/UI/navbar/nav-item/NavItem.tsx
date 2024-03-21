import { FC } from "react";
import Text from "../../text/Text";

interface NavItemProps {
  label: string;
}

const NavItem: FC<NavItemProps> = ({ label }) => {
  return (
    <a
      href="#"
      className="block rounded-md px-3 py-2 text-base font-medium"
      aria-current="page"
    >
      <Text>{label}</Text>
    </a>
  );
};

export default NavItem;
