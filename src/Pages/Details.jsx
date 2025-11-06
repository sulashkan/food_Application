import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

function Details() {
  const location = useLocation();
  const movie = location.state?.movie; 
   const {theme} = useContext(ThemeContext);

  if (!movie) return <p className="text-center text-white mt-10">No movie data found.</p>;

  return (
<div
  className={`h-187 flex justify-center items-center py-10 px-64 ${
    theme === "dark"
      ? "bg-gradient-to-b from-[#0d0d0d] to-[#141414]"
      : "bg-[#e3dede73] text-black"
  }`}
>
  <div className="bg-[#58494973] rounded-xl overflow-hidden shadow-lg w-[800px] transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] p-6">
    <h1 className={`text-3xl font-bold mb-5 text-center ${theme === "dark" ? "text-white" : "text-white"}`}>{movie.title}</h1>

    <div className="flex flex-col md:flex-row gap-6 items-center">
    
      <div className="flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 h-85 object-cover rounded-lg shadow-lg"
        />
      </div>

      
      <div className="flex-1 text-center md:text-left">
        <p className="text-white text-lg leading-relaxed">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Details;
