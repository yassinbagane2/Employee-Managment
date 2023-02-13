import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  return (
    <>
      <Navbar
        hideSidebar={() => {
          setShowSidebar(!showSidebar);
        }}
      />
      <div className="flex bg-gray-50 h-screen w-full">
        <Sidebar showSidebar={showSidebar} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
