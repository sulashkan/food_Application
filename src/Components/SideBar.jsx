import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [active, setActive] = useState("welcome"); // default active

    return (
        <div className="h-[86.3vh] w-64 bg-[#1a1a1a] p-6 border-r border-[#2a2a2a] shadow-inner">
            <h2 className="text-white text-2xl font-semibold mb-6 tracking-wide">
                Dashboard
            </h2>
            <h6 className="text-white text-xl font-semibold mb-6 tracking-wide">
                Movies
            </h6>

            <nav className="flex flex-col gap-3">
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
