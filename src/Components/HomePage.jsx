
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex-1 overflow-y-auto ${
        theme === "dark"
      ? "bg-gradient-to-b from-[#0d0d0d] to-[#141414]"
      : "bg-[#e3dede73] text-black"
      }`}
    >
    
      <Outlet />
    </div>
  );
}
export default HomePage;
