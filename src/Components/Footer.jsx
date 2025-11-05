import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-[60px] border-t flex justify-center items-center text-sm ${
        theme === "dark"
          ? "bg-[#141414] border-[#2a2a2a] text-[#b3b3b3]"
          : "bg-white border-gray-300 text-gray-700"
      }`}
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-[#e50914] font-semibold">Zoggy</span>. All Rights Reserved.
      </p>
    </div>
  );
}
export default Footer;
