import React from "react";
import Home from "./home";
function User({ logout }) {
    return (

        <>
          <nav className="flex w-full justify-evenly bg-blue-500 h-[80px] items-center">
                <ul className="flex w-[600px] justify-evenly ml-10px items-center text-[22px] text-white">
                    <li>HOME</li>
                    <li>MANAGE ACCOUNT</li>
                    <li>SETTINGS</li>
                </ul>
                <button type="button" className="h-[45px] w-20 text-[20px] text-blue-500  bg-white rounded-[25px] " 
                onClick={logout}>
                Logout
            </button>
            </nav>
            <div className="h-[91vh] flex justify-center items-center">
                <h1 className="text-[75px]">Welcome , User!</h1>
            </div>
        </>
    )
} export default User