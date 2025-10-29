import React from "react";

function NavBar(){

    return(
        <>
            <nav className="flex h-[60px] w-screen justify-center  bg-blue-500">
                <div className=" w-6/12 justify-end items-center flex text-5xl text-white">
                    Zoggy
                </div>
                <div className=" flex items-center justify-center w-6/12">
                    <button type="button" className="h-[45px] bg-white w-[100px] rounded-[30px] cursor-pointer">LOGOUT</button>
                </div>
            </nav>
        </>
    )
}export default NavBar;