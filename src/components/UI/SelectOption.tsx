import React from "react";
import SelectOptionProps from "../../interfaces/SelectOption";

const SelectOption: React.FC<SelectOptionProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 capitalize" htmlFor="gender">
        {name}
      </label>
      <select
        name={name}
        className="w-72 rounded-lg border border-gray-300 bg-gray-50 py-1 text-sm text-gray-900 ring-0"
        id={name}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectOption;
