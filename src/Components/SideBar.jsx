import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

function Sidebar() {
    const [active, setActive] = useState("welcome");
    const { theme } = useContext(ThemeContext); 

    return (
       <div
      className={`h-[86.3vh] w-64 p-6 border-r shadow-inner ${
        theme === "dark"
          ? "bg-[#1a1a1a] border-[#2a2a2a] text-white"
          : "bg-white border-gray-300 text-black"
      }`}
    >
            <h2 className=" text-2xl font-semibold mb-6 tracking-wide">
                Dashboard
            </h2>
            <h6 className="text-xl font-semibold mb-6 tracking-wide">
                Movies
            </h6>

            <nav className="flex flex-col gap-3">
                <Link
                    to="search"
                    onClick={() => setActive("search")}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${active === "search"
                            ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
                            : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                        }`}
                >
                    Search
                </Link>
                <Link
                    to="welcome"
                    onClick={() => setActive("welcome")}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${active === "welcome"
                            ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
                            : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                        }`}
                >
                    Popular Movies
                </Link>

                <Link
                    to="order"
                    onClick={() => setActive("order")}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${active === "order"
                            ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
                            : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                        }`}
                >
                    Top Rated
                </Link>

                <Link
                    to="profile"
                    onClick={() => setActive("profile")}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${active === "profile"
                            ? "text-white bg-[#e50914] shadow-[0_0_10px_rgba(229,9,20,0.4)]"
                            : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                        }`}
                >
                    Tranding Today
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;