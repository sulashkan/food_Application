import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className="text-black flex justify-center items-center min-h-130">
        Contacts
      </div>
      <Footer />
    </div>
  );
};
