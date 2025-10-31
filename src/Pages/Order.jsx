import React, { useEffect, useState } from "react";

const api_key = "b3d99167c1c907117790447669e1a214";
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2Q5OTE2N2MxYzkwNzExNzc5MDQ0NzY2OWUxYTIxNCIsIm5iZiI6MTc2MTgxODA2Mi44MjUsInN1YiI6IjY5MDMzNWNlNjAxMjNjYTQ1NzZlODkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4GIRt-Lyj210IL-YhTbV0PRYspzmovUcrZyyjwwPB0";

function Order() {

    const [data, setData] = useState([]);
    let headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url, {
                method: "GET",
                headers,
            });
            let outPut = await result.json();
            setData(outPut?.results);
        };

        fetchData();
    }, []);
    console.log(data);

    return (
        <>
             <div className="bg-gradient-to-b from-[#0d0d0d] to-[#141414] min-h-screen py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {data.map((movie, index) => (
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
              <h2 className="text-white text-lg font-semibold truncate">
                {movie.title}
              </h2>

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
        </>
    )
} export default Order