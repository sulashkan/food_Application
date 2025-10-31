import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-black flex justify-center items-center min-h-131 ">
        Home
      </div>
      <Footer />
    </div>
  );
};
