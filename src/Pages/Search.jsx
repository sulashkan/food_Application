import React, { useContext, useEffect, useState } from "react";
import useFetch from "../Components/Hooks/GetData/FetchData";
import { ThemeContext } from "../Context/Context";
import useDebounce from "../Components/Hooks/GetData/Debouncer";

function Search() {
  const [search, setSearch] = useState("");
  const [path, setPath] = useState("/movie/popular");
  const { data, loading, error, page, setpage, totalpage } = useFetch(path);
  const debounceTerm = useDebounce(search, 1500);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (debounceTerm) {
      setPath(`/search/movie?query=${encodeURIComponent(debounceTerm)}`);
    } else {
      setPath("/movie/popular");
    }
  }, [debounceTerm]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div
      className={`min-h-screen py-10 px-64 ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#0d0d0d] to-[#141414] "
          : "bg-white text-black"
      }`}
    >
      <div className="mb-6">
        <input
          type="text"
          className={`bg-white text-black px-4 py-2 rounded w-full text-center h-[40px] w-[300px]  border-solid border-[1.5px] border-gray-300 rounded-[5px] shadow-lg w-64 transform transition focus:outline-none duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
      }`}
          placeholder="Search Movie"
          onChange={handleSearch}
          value={search}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
       {data.length ?(<div className=" text-white">Not Found</div>):
       (data?.results?.map((movie, index) => (
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
        ))
      )}
      </div>
        <div className=" flex justify-center items-center w-full h-15 mt-4">
        <div className="flex w-44 justify-center gap-3">
          {page > 1 && (
            <button
              type="button"
              className=" w-20 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer"
              onClick={() => setpage(page - 1)}
            >
              {" "}
              Previous
            </button>
          )}
          {/* <p className="w-5 text-center bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2  transition cursor-pointer">{page}</p> */}
          {page < totalpage && (
            <button
              type="button"
              className=" w-20 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer"
              onClick={() => setpage(page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
