import React from "react";

interface Props {
  children: string;
  className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`bg-dark-blue text-white px-3 py-2 w-full mt-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
