import { FC } from "react";

export enum Variant {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = Variant.CONTAINED,
  className,
  ...props
}) => {
  let classNameString: string =
    "text-primary-paper py-2.5 px-4 w-full sm:w-auto mt-10 sm:mt-0 rounded-lg ";

  if (variant === Variant.CONTAINED) {
    classNameString += " bg-primary-button";
  }

  if (variant === Variant.OUTLINED) {
    classNameString += " bg-transparent border border-secondary-border";
  }

  return (
    <button
      {...props}
      className={`${classNameString} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
