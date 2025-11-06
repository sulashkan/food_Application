import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

function Sidebar() {
  const [active, setActive] = useState("welcome");
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`md:h-[89vh] lg:h-[86.3vh] sm:w-30 md:w-40 lg:w-64 p-6 border-r shadow-inner ${
        theme === "dark"
          ? "bg-[#1a1a1a] border-[#2a2a2a] text-white"
          : "bg-[#e3dede73] border-gray-300 text-black"
      }`}
    >
      <h2 className="sm:text-xl md:text-xl lg:text-2xl font-semibold mb-6 tracking-wide">
        Dashboard
      </h2>
      <h6 className="text-xl font-semibold mb-6 tracking-wide">Movies</h6>

      <nav className="flex flex-col gap-3">
        <Link
          to="search"
          onClick={() => setActive("search")}
          className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 
    ${
      theme === "dark"
        ? active === "search"
          ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
          : "text-white hover:text-[#e50914]"
        : active === "search"
        ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
        : "text-black hover:bg-gray-200"
    }`}
        >
          Search
        </Link>

        <Link
          to="welcome"
          onClick={() => setActive("welcome")}
          className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 
    ${
      theme === "dark"
        ? active === "welcome"
          ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
          : "text-white hover:text-[#e50914]"
        : active === "welcome"
        ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
        : "text-black hover:bg-gray-200"
    }`}
        >
          Popular Movies
        </Link>

        <Link
          to="order"
          onClick={() => setActive("order")}
          className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 
    ${
      theme === "dark"
        ? active === "order"
          ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
          : "text-white hover:text-[#e50914]"
        : active === "order"
        ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
        : "text-black hover:bg-gray-200"
    }`}
        >
          Top Rated
        </Link>

        <Link
          to="profile"
          onClick={() => setActive("profile")}
          className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 
    ${
      theme === "dark"
        ? active === "profile"
          ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
          : "text-white hover:text-[#e50914]"
        : active === "profile"
        ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
        : "text-black hover:bg-gray-200"
    }`}
        >
          Tranding Today
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
