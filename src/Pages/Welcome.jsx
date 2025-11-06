import React, { useContext } from "react";
import useFetch from "../CustomHooks/FetchData";
import { ThemeContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";


function Welcome() {
  const path = "/movie/popular";
  const { data, loading, error ,page,setpage,totalpage} = useFetch(path);
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate()

 const handleDetails = (movie) => {
  navigate("/user/details", { state: { movie } });
};


  if (loading) return <p className="text-white text-center h-157.5 mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center h-157.5 mt-10">Error: {error}</p>;

  return (
    <div className={`min-h-screen py-10 px-64${theme === "dark"
      ? "bg-gradient-to-b from-[#0d0d0d] to-[#141414]"
      : "bg-[#e3dede73] text-black" }`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {data?.results?.map((movie, index) => (
          <div
            key={index}
            className={`bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg w-64 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)`}
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
              <button onClick={() => handleDetails(movie)} className="mt-4 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

       <div className=" flex justify-center items-center w-full h-15 mt-4">
        <div className="flex w-44 justify-center gap-3">
          {page > 1 && (
          <button type="button" className=" w-20 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer" onClick={()=>setpage(page-1)}> Previous</button>
        )}
        {/* <p className="w-5 text-center bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2  transition cursor-pointer">{page}</p> */}
        {page < totalpage && (
          <button type="button" className=" w-20 bg-[#e50914] hover:bg-[#ff1c1c] text-white font-medium py-2 rounded-full transition cursor-pointer" onClick={()=>setpage(page+1)}>Next</button>
        )}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
