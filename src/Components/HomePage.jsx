
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex-1 overflow-y-auto ${
        theme === "dark" ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
    
      <Outlet />
    </div>
  );
}
export default HomePage;
