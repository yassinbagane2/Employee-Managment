import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Sidebar from "../Shared/Sidebar";
const Layout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  return (
    <>
      <Navbar
        hideSidebar={() => {
          setShowSidebar(!showSidebar);
        }}
      />
      <div className="flex h-screen w-full bg-gray-50">
        <Sidebar showSidebar={showSidebar} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
