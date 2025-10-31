import React from "react";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className=" h-screen flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex overflow-hidden bg-gray-200 min-h-130 ">
        <div className="  bg-red-300">
          <Sidebar />
        </div>
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default User;
