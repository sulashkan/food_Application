import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gradient-to-r from-[#031b4e] to-[#052d73] text-white shadow-lg">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">MyApp+</h1>

        {/* Navigation Links */}
        <div className="flex gap-10 text-sm font-medium">
          <Link
            to="/home"
            className="hover:text-blue-300 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-300 transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="/contacts"
            className="hover:text-blue-300 transition-all duration-200"
          >
            Contacts
          </Link>
        </div>

        {/* Profile + Logout */}
        <div className="flex items-center gap-6">
          <Link
            to="/user"
            className="flex items-center justify-center w-10 h-10 bg-[#0a2b5e] hover:bg-[#123b83] rounded-full text-white shadow-md transition-all duration-300"
          >
            👤
          </Link>

          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
