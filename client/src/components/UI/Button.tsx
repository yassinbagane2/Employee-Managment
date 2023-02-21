import React from "react";
import buttonProps from "../../interfaces/buttonProps";
const Button: React.FC<buttonProps> = ({
  children,
  type,
  className,
  ...props
}) => {
  return (
    <button
      className={`mt-3 w-full bg-dark-blue px-3 py-2 text-white ${className}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
