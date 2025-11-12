import React, { useContext, useState  } from "react";
import { Link, Outlet } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import useFetch from "../custom_Hook/useApi";
import { LiaFileContractSolid } from "react-icons/lia";
import { ThemeContext } from "../context/ThemContext";
import useDebounce from "../custom_Hook/useDebouce";
// import { useNavigate } from "react-router-dom";


const Product = () => {
  // const ref = useRef(null)
  const [search, setSearch] = useState("");
  const {theme} = useContext(ThemeContext);
  const searchValue = useDebounce( search , 1000)
  // const navigate = useNavigate();
  

  let url = `https://api.themoviedb.org/3/${searchValue ? `search/movie?query=${encodeURIComponent(searchValue)}&api_key=${import.meta.env.VITE_API_KEY}&language=en-US` : `movie/popular?api_key=${import.meta.env.VITE_API_KEY}` }`;
  
  const { data, loading, page, totalPage, setPage } = useFetch( url, {
    method: "GET",
  });

  function searchHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  if (loading)
    return (
      <div className="font-bold text-3xl flex min-h-120 min-w-5xl justify-center items-center ">
        Loading...
      </div>
    );

  return (
    <div className={`flex w-[1023px] ${theme === 'dark' ? "bg-linear-to-b from-[#04154e] to-[#010a25]" : "bg-white"} min-h-screen text-white p-10 flex-col flex-wrap  overflow-y-auto`}>
      <div className="flex gap-9">
        <h1 className={`text-3xl font-bold ${theme === 'dark' ?  "text-blue-300" : "text-blue-700"} mb-6 tracking-wide`}>
          Popular Movies
        </h1>
           <input 
           type="text"
           placeholder="Search"
           value={search}
           onChange={searchHandler}
           className="h-9 p-1 bg-gray-500 border-none rounded-md"
        ></input>
      </div>

      <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">

        {data.length === 0 ? (<div className="text-white w-full h-full  justify-center items-center">Movie Not Found</div>)
         : 
         (data.map((movie, index) => (
            <div key={index} className=" relative w-[200px] h-[300px] group bg-[#0a1b4d] rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                <h2 className="text-lg font-semibold mb-2">
                  {movie.original_title}
                </h2>
                
                <Link to={`detail/${movie.id}`} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300" >
                  <PlayCircle className="w-4 h-4" /> Watch Now 
                </Link>
                {/* <Outlet/> */}
                
              </div>
            </div>
          ))
        )
          }
      </div>

      <div className="flex justify-center items-center w-full gap-2 mt-5">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        <p>{page} / {totalPage}</p>
        {page < totalPage  && (
          <button
            onClick={() => setPage(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
