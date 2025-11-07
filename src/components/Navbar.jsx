import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemContext";
import { useAuth } from "../context/AuthContext";


export const Navbar = () => {

  const { theme, toggle } = useContext(ThemeContext);
  const {logout} = useAuth();

  return (
    <nav
      className={`w-full  transition-all duration-500 ${
        theme === "dark"
          ? "bg-linear-to-r from-[#031b4e] to-[#052d73] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-500 tracking-wide">
          MyApp+
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-10 text-sm font-medium">
          <Link
            to="/home"
            className="hover:text-blue-400 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="/contacts"
            className="hover:text-blue-400 transition-all duration-200"
          >
            Contacts
          </Link>
        </div>

        {/* Theme Toggle Button */}
        
        {/* Profile + Logout */}
       
        <div className="flex items-center gap-6">
          <button
          onClick={toggle}
          className="px-3 py-2 rounded-lg font-medium border border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
           {theme === "dark" ? "Light" : "Dark"} Mode
        </button>

          <Link
            to="/user"
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#0a2b5e] hover:bg-[#123b83] text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            👤
          </Link>

          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
