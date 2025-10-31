import React from "react";

function HomeFooter() {

    return (
        <>
            <div className="w-full h-[60px] bg-[#141414] border-t border-[#2a2a2a] flex justify-center items-center text-[#b3b3b3] text-sm">
                <p>
                    © {new Date().getFullYear()}{" "}
                    <span className="text-[#e50914] font-semibold">Zoggy</span>. All Rights Reserved.
                </p>
            </div>

        </>
    )
} export default HomeFooter