import React from "react";
import HomeNav from "./Components/HomeNav";
import HomeFooter from "./Components/HomeFooter";
import Home from "../src/home"
import netfllix from "../src/Images/netfllix.jpg" 
function Start() {

    return (

        <>
            <div className="flex flex-col h-screen w-full">
                <div className="flex-shrink-0">
                    <HomeNav />
                </div>
                 <div className="flex-shrink-0 " >
                    <Home/>
                </div>
                 <div className="flex-shrink-0">

                <HomeFooter />
                </div>
            </div>
            

        </>
    )
} export default Start