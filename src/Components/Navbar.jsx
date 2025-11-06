import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext"; 

function NavBar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout } = useAuth(); 

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate("/");   
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav
      className={`w-full h-[70px] border-b flex items-center justify-between px-8 shadow-md ${
        theme === "dark"
          ? "bg-[#141414] border-[#2a2a2a] text-white"
          : "bg-[#e3dede73] border-gray-300 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold tracking-wide">
        <span className="text-[#e50914]">Zoggy</span>
      </h1>

      <div className="flex gap-4">
        <button
          onClick={toggleTheme}
          className="py-2 px-5 rounded-full bg-black hover:bg-[#ff1c1c] text-white font-medium transition duration-300"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button
          onClick={handleLogout} 
          className="py-2 px-5 rounded-full bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium transition duration-300"
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
