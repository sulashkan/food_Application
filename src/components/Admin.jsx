import React from "react";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const Admin = ({ logout }) => {
  return (
    <div>
      <Navbar logout={logout} />
      <div className="flex  bg-blue-300 min-h-130 ">
        <div className="w-[20%]  bg-red-300">
          <Sidebar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;