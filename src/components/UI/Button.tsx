import React from "react";
import buttonProps from "../../interfaces/buttonProps";
const Button: React.FC<buttonProps> = ({ children, className }) => {
  return (
    <button
      className={`mt-3 w-full bg-dark-blue px-3 py-2 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
