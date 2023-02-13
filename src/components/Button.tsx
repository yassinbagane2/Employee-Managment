import React from "react";

interface Props {
  children: string;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-dark-blue text-white px-3 py-2 w-full my-2">
      {children}
    </button>
  );
};

export default Button;
