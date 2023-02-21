import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";

interface Props {
  showSidebar: Boolean;
}

const Sidebar: React.FC<Props> = ({ showSidebar }) => {
  const [isShow, setIsShow] = useState<Boolean>(true);
  return (
    <div
      className={
        showSidebar
          ? "duration-50 flex w-[20vw] flex-col items-center bg-[#0f172a] pt-4 text-white ease-in"
          : "absolute -left-[900px] bg-[#0f172a]"
      }
    >
      <img
        src={"/img/profile.avif"}
        className="h-40 w-40 rounded-full object-cover"
        alt="profile"
      />
      <h2 className="mt-2 font-poppins text-xl font-medium">Yassin Bagane</h2>
      <p className="leading-3">Admin</p>
      <div className="mt-10 w-full text-gray-200">
        <ul className="flex w-full flex-col items-start justify-center">
          <li className="my-1 ml-3 w-11/12 cursor-pointer rounded-md bg-gray-800 py-2 px-3 duration-200 hover:bg-gray-700">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="my-1 ml-3 w-11/12 cursor-pointer rounded-md bg-gray-800 py-2 px-3 duration-200 hover:bg-gray-700">
            <NavLink to="/collaborators">Collaborators</NavLink>
          </li>
          <li className="my-1 ml-3 w-11/12 cursor-pointer rounded-md bg-gray-800 py-2 px-3 duration-200 hover:bg-gray-700">
            <NavLink to="/archive">Archive</NavLink>
          </li>
          <li className="my-1 ml-3 w-11/12 cursor-pointer rounded-md bg-gray-800 py-2 px-3 duration-200 hover:bg-gray-700">
            <NavLink to="/recruitement">Recruitement</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
