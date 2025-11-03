import React from "react";
import { PlayCircle } from "lucide-react";
import useFetch from "../custom_Hook/useApi";

// const api_key = "b3d99167c1c907117790447669e1a214";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_URL}`;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2Q5OTE2N2MxYzkwNzExNzc5MDQ0NzY2OWUxYTIxNCIsIm5iZiI6MTc2MTgxODA2Mi44MjUsInN1YiI6IjY5MDMzNWNlNjAxMjNjYTQ1NzZlODkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4GIRt-Lyj210IL-YhTbV0PRYspzmovUcrZyyjwwPB0";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const Product = () => {
  const { data, loading } = useFetch(url, { method: "GET", headers });

  if (loading)
    return (
      <div className="font-bold text-3xl flex min-h-[30rem] min-w-[64rem] justify-center items-center ">
        Loading...
      </div>
    );

  return (
    <div className="flex bg-gradient-to-b from-[#04154e] to-[#010a25] min-h-screen text-white p-10  flex-wrap  overflow-y-auto">
      <h1 className="text-3xl font-bold text-blue-300 mb-6 tracking-wide">
        Popular Movies
      </h1>

      <div className=" flex   flex-wrap  gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map((movie, index) => (
          <div
            key={index}
            className=" relative group bg-[#0a1b4d] rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-[320px] object-cover group-hover:opacity-80 transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
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
    </div>
  );
};

export default Product;
