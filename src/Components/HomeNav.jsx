import React from "react";
import { useNavigate } from "react-router-dom";
function HomeNav() {

    const navigate = useNavigate()

    return (
        <>
            <nav className="w-full h-[70px] bg-[#141414] border-b border-[#2a2a2a] flex items-center justify-between px-8 shadow-md">
                
                <h1 className="text-3xl font-bold tracking-wide text-white">
                    <span className="text-[#e50914]">Zoggy</span>
                </h1>

                
                {/* <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-[0_0_10px_rgba(229,9,20,0.6)]"
                >
                    LOGOUT
                </button> */}
            </nav>
        </>
    )
} export default HomeNav;