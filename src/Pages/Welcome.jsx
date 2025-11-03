import React from "react";
import useFetch from "../Components/Hooks/GetData/FetchData";

function Welcome() {
  const path = "/movie/popular";
  const { data, loading, error } = useFetch(path);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] to-[#141414] min-h-screen py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {data?.results?.map((movie, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg w-64 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="h-84 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between text-center">
              <h2 className="text-white text-lg font-semibold truncate">{movie.title}</h2>
              <p className="text-[#b3b3b3] text-sm mt-2 line-clamp-3">
                {movie.overview || "No description available"}
              </p>
              <button className="mt-4 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
