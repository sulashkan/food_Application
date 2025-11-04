import React from "react";
import { PlayCircle } from "lucide-react";
import useFetch from "../custom_Hook/useApi";

const url = `${import.meta.env.VITE_BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const options = { method: "GET", headers: { accept: "application/json" } };


export const UpcomingMovies = () => {
  
  const { data, loading, page , setPage , totalPage } = useFetch(url, options);

  if (loading)
    return (
      <div className="font-bold text-3xl flex min-h-120 min-w-5xl justify-center items-center ">
        Loading...
      </div>
    );

  return (
    <div className="flex-1 bg-linear-to-b from-[#04154e] to-[#010a25] min-h-screen text-white p-10 flex-wrap   overflow-y-auto">
      <h1 className="text-3xl font-bold text-blue-300 mb-6 tracking-wide">
        Popular Movies
      </h1>

      <div className=" flex  flex-wrap  gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map((movie, index) => (
          <div
            key={index}
            className=" relative group bg-[#0a1b4d] rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
              <h2 className="text-lg font-semibold mb-2">
                {movie.original_title}
              </h2>
              <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                <PlayCircle className="w-4 h-4" /> Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full mt-5 gap-3">
        {page >1 && (
          <button  onClick={() => setPage(page-1)} className=" border p-2 rounded-md">
            Previous
          </button>
        )}
        <div>{page}</div>
        {page < totalPage && (
          <button onClick={() => setPage(page+1)} className="border p-2 rounded-md">
            Next
          </button>
        )}
      </div>
    </div>
  );
};
