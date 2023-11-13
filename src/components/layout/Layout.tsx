import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "../home/Topbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-zinc-900">
      <div className="w-full relative">
        <Topbar />
        <div className="mt-10">{children}</div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
