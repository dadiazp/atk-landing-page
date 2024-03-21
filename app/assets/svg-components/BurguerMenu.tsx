import { FC } from "react";

interface BurgueMenuProps {
  handleToggleMenu: () => void;
}
const BurgueMenu: FC<BurgueMenuProps> = ({ handleToggleMenu }) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-main"
      aria-controls="mobile-menu"
      aria-expanded="false"
      onClick={handleToggleMenu}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H19M1 1H19M1 13H19"
          stroke="#344054"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BurgueMenu;
