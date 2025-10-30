import React from "react";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  bg-gray-200 min-h-130 ">
        <div className="w-[20%]  bg-red-300">
          <Sidebar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default User;
