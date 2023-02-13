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
          ? "flex flex-col items-center pt-4 w-[22vw] bg-[#0f172a] text-white duration-50 ease-in"
          : "absolute -left-[900px] bg-[#0f172a]"
      }
    >
      <img
        src={"/img/profile.avif"}
        className="w-40 h-40 object-cover rounded-full"
        alt="profile"
      />
      <h2 className="text-xl mt-2 font-medium font-poppins">Yassin Bagane</h2>
      <p className="leading-3">Admin</p>
      <div className="mt-10 w-full text-gray-200">
        <ul className="flex items-start flex-col w-full">
          <li className="w-full">
            <ul className="flex flex-col">
              <li className="flex justify-between border-b px-2 pb-1 hover:text-white">
                <NavLink to={"dashboard"}>Dashboard</NavLink>
                <div
                  onClick={() => {
                    setIsShow(!isShow);
                  }}
                  className="cursor-pointer"
                >
                  <FiArrowDown />
                </div>
              </li>
              <li
                className={
                  !isShow ? "ml-4 pt-2 hidden" : "ml-4 pt-2 hover:text-white"
                }
              >
                <NavLink to={"collaborators"}>Collaborators</NavLink>
              </li>
              <li
                className={
                  !isShow ? "ml-4 pt-2 hidden" : "ml-4 pt-2 hover:text-white"
                }
              >
                <NavLink to={"archive"}>Archive</NavLink>
              </li>
            </ul>
          </li>
          <li className="p-2 border-b w-full hover:text-white">
            <NavLink to={"archive"}>Recruitment</NavLink>
          </li>
          <li className="p-2 border-b w-full hover:text-white">
            <NavLink to={"archive"}>Trainings</NavLink>
          </li>
          <li className="p-2 border-b w-full hover:text-white">
            <NavLink to={"careers"}>Evaluations & Careers</NavLink>
          </li>
          <li className="p-2 border-b w-full hover:text-white">
            <NavLink to={"activities"}>Time & Activities</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
