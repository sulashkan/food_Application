import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

    return (
        <>
            <div className="h-[86.3vh] w-64 bg-sky-100 p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <nav className="flex flex-col gap-2">
                    <Link
                        to="welcome"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Home Page
                    </Link>
                    <Link
                        to="order"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Order
                    </Link>
                      <Link
                        to="profile"
                        className="text-gray-700 hover:text-blue-600 transition"
                    >
                        Profile
                    </Link>
                </nav>
            </div>
        </>
    )
} export default Sidebar