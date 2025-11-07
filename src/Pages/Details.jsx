import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import useTrailer from "./Trailer";

function Details() {
  const location = useLocation();
  const movie = location.state?.movie;
  const from = location.state?.from;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  if (!movie)
    return <p className="text-center text-white mt-10">No movie data found.</p>;

  const { trailers, loading, error } = useTrailer(movie.id);

  const handleBack = () => {
    if (from) navigate(from);
    else navigate(-1);
  };

  const filteredTrailers = trailers.filter(
    (t) => t.type?.toLowerCase() === "trailer"
  );

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-8 px-6 sm:px-10 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#0d0d0d] to-[#141414] text-white"
          : "bg-[#f3f3f3] text-black"
      }`}
    >
      {/* Back Button */}
      <div className="w-full max-w-[900px] flex justify-start">
        <button
          onClick={handleBack}
          className="bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          ← Back
        </button>
      </div>

      {/* Movie Info Card */}
      <div
        className={`w-full max-w-[900px] mt-6 mb-10 rounded-2xl shadow-2xl overflow-hidden ${
          theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-64 h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-base leading-relaxed opacity-90">
              {movie.overview || "No description available."}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm opacity-80">
              <span>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</span>
              <span>📅 {movie.release_date}</span>
            </div>
          </div>
        </div>
      </div>

    
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#e50914] pb-2">
        Available Trailers
      </h2>

      {loading && <p className="text-gray-400">Loading trailers...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl px-2">
        {filteredTrailers.length > 0 ? (
          filteredTrailers.map((t) => (
            <div
              key={t.id}
              className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${
                theme === "dark" ? "bg-[#1f1f1f]" : "bg-[#fafafa]"
              }`}
            >
              <iframe
                className="w-full h-[300px]"
                src={`https://www.youtube.com/embed/${t.key}`}
                title={t.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <p className="font-semibold line-clamp-2">{t.name}</p>
                <p className="text-sm opacity-70 mt-1">{t.type}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No trailers found for this movie.</p>
        )}
      </div>
    </div>
  );
}

export default Details;
