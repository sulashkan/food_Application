import React from "react";
import { Outlet } from "react-router-dom";

function HomePage(){

    return(
        <>
            <div className=" w-full bg-white flex-1 overflow-y-auto">
                <h1 className="flex items-center justify-center">
                
                
            </h1>
            <Outlet/>
            </div>
            
        </>
    )
}export default HomePage