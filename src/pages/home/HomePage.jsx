import { useState } from "react";
import MovieCard from "../../components/cards/MovieCard.jsx";
import useFeatchData from "../../hooks/fetchData/FeatchData.js";
import { NavLink } from "react-router-dom";
import { useSearch } from "../../context-api/dataProvider.jsx";
import Loading from "../../components/loader/Loading.jsx";

const DashHome = () => {
  const { debouncedKeyword } = useSearch();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoding] = useState(true);
  // console.log("Total Pages : ", totalPages

  let popularData = useFeatchData(
    "popular",
    1,
    setTotalPages,
    setLoding,
    debouncedKeyword
  ); // getting popular movies Data -
  let trendingData = useFeatchData(
    "now_playing",
    1,
    setTotalPages,
    setLoding,
    debouncedKeyword
  ); // getting Trending Movies -
  let topRatedData = useFeatchData(
    "top_rated",
    1,
    setTotalPages,
    setLoding,
    debouncedKeyword
  ); //getting Top Rated Movies -
  let upComeingData = useFeatchData(
    "upcoming",
    1,
    setTotalPages,
    setLoding,
    debouncedKeyword
  ); //getting Top Rated Movies -

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full min-h-screen flex  flex-col p-4 gap-10 ">
      {/* Popular Movie Section  */}
      <>
        <h2 className=" flex  items-center justify-center gap-5  w-full px-3 mt-6 ">
          <p className="text-3xl text-white"> Popular Movies : </p>
          <NavLink
            to="popular"
            className=" text-xl py-2 px-4 rounded border border-white hover:bg-white hover:text-green-900"
          >
            see more
          </NavLink>
        </h2>

        {popularData.length < 1 ? (
          <h1 className="text-xl text-center">Data Not Found </h1>
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-4 ">
            {popularData?.map((movie, index) => (
              <MovieCard key={index + 1} movie={movie} />
            ))}
          </div>
        )}
      </>

      {/* Trending Movie Section  */}

      <>
        <h2 className=" flex  items-center justify-center gap-5  w-full px-3 mt-6 ">
          <p className="text-3xl text-white"> Trending Movies : </p>
          <NavLink
            to="now_playing"
            className=" text-xl py-2 px-4 rounded border border-white hover:bg-white hover:text-green-900"
          >
            see more
          </NavLink>
        </h2>

        {trendingData.length < 1 ? (
          <h1 className="text-xl text-center">Data Not Found </h1>
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {trendingData?.map((movie, index) => (
              <MovieCard key={index + 1} movie={movie} />
            ))}
          </div>
        )}
      </>
      {/* Top Rated Movies : - */}
      <>
        <h2 className=" flex  items-center  justify-center gap-5  w-full px-3 py-2">
          <p className="text-3xl text-white"> Top Rated Movies : </p>
          <NavLink
            to="top_rated"
            className=" text-xl py-2 px-4 rounded border border-white hover:bg-white hover:text-green-900"
          >
            see more
          </NavLink>
        </h2>

        {topRatedData.length < 1 ? (
          <h1 className="text-xl text-center">Data Not Found </h1>
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {topRatedData?.map((movie, index) => (
              <MovieCard key={index + 1} movie={movie} />
            ))}
          </div>
        )}
      </>

      {/* Up-Comeing Movies : - */}
      <>
        <h2 className=" flex  items-center justify-center gap-5 w-full px-3 py-2">
          <p className="text-3xl text-white"> Up-Comeing Movies : </p>
          <NavLink
            to="top_rated"
            className=" text-xl py-2 px-4 rounded border border-white hover:bg-white hover:text-green-900"
          >
            see more
          </NavLink>
        </h2>
        {upComeingData.length < 1 ? (
          <h1 className="text-xl text-center">Data Not Found </h1>
        ) : (
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {upComeingData?.map((movie, index) => (
              <MovieCard key={index + 1} movie={movie} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default DashHome;
