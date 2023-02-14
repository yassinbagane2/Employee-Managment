import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className="rounded-md border bg-gray-50 py-1 pl-6 shadow-sm outline-none"
        name="search"
        id="search"
      />
      <FiSearch className="absolute top-2 left-1 text-gray-500" />
    </div>
  );
};

export default SearchInput;
