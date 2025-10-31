import React from "react";
import NavBar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";

function User({ logout }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex-shrink-0">
        <NavBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex-shrink-0 bg-gray-100 border-r">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <HomePage />
        </div>
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default User;
