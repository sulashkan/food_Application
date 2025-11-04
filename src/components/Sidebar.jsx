import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, User, Settings, HelpCircle, ChevronDown } from "lucide-react";

export const Sidebar = () => {
  const navigate = useNavigate();

  function handler(e) {
    const path = e.target.value;
    if (path) navigate(path);
  }

  return (
    <div className="h-screen w-64 bg-linear-to-b from-[#031b4e] to-[#052d73] text-white flex flex-col py-8 px-5 shadow-xl ">
      <nav className="flex flex-col gap-4">
        <Link
          to="/home"
          className="flex items-center gap-3 hover:bg-blue-800 px-3 py-2 rounded-lg transition-all duration-200"
        >
          <Home className="w-5 h-5" /> Home
        </Link>
        <Link
          to="profile"
          className="flex items-center gap-3 hover:bg-blue-800 px-3 py-2 rounded-lg transition-all duration-200"
        >
          <User className="w-5 h-5" /> Profile
        </Link>
        <Link
          to="settings"
          className="flex items-center gap-3 hover:bg-blue-800 px-3 py-2 rounded-lg transition-all duration-200"
        >
          <Settings className="w-5 h-5" /> Settings
        </Link>
        <Link
          to="help"
          className="flex items-center gap-3 hover:bg-blue-800 px-3 py-2 rounded-lg transition-all duration-200"
        >
          <HelpCircle className="w-5 h-5" /> Help
        </Link>
      </nav>

      <div className="border-t border-blue-600 my-6"></div>

      {/* Movies Section */}
      <div>
        <h1 className="text-blue-300 font-semibold flex items-center gap-2 mb-2">
          <ChevronDown className="w-4 h-4" /> Movies
        </h1>
        <select
          onChange={handler}
          className="w-full bg-blue-900 text-white p-2 rounded-lg border border-blue-700 focus:outline-none hover:bg-blue-800 transition-all duration-200"
        >
          <option value="/user">Popular Movies</option>
          <option value="toprated">Top Rated Movies</option>
          <option value="upcoming">Upcoming Movies</option>
        </select>
      </div>

      {/* Spacer + Logout */}
      <div className="mt-auto pt-6 border-t border-blue-700">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
