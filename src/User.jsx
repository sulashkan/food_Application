import React from "react";
import Home from "./home";
import NavBar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
function User({ logout }) {
    return (

        <>
            <div className="max-w-full">

                <NavBar />
                <div className="w-screen flex">
                    <Sidebar />
                    <HomePage className="w-[50vh]" />
                </div>

                <Footer />
            </div>

        </>
    )
} export default User