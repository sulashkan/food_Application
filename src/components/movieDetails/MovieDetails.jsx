import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loader/Loading";
import DataNotFound from "../notFound/DataNotFound";
import backUpImg from "../../assets/backUp.png";
import { IoStar } from "react-icons/io5";

const MovieDetails = () => {
  const navigate = useNavigate();
  const img_api = import.meta.env.VITE_MOVIE_IMG_API;
  const api = import.meta.env.VITE_MOVIE_APP_API_URL;
  const api_key = import.meta.env.VITE_MOVIE_APP_KEY;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(`${api}/movie/${id}?api_key=${api_key}`, {
          method: "GET",
        });
        let outPut = await result.json();
        // console.log(outPut);
        setMovieDetail(outPut);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [api, api_key, id]);

  return loading ? (
    <Loading />
  ) : !movieDetail || movieDetail.length < 1 ? (
    <DataNotFound />
  ) : (
    <div className="min-h-[82.5vh]  flex items-center justify-center w-[80%]">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block relative">
        <img
          src={
            movieDetail?.poster_path
              ? `${img_api}${movieDetail.poster_path}`
              : backUpImg
          }
          alt={movieDetail.title}
          className="w-[95%] object-contain transition-transform duration-500 mx-auto"
        />
        <p className="text-yellow-500 absolute top-4 right-8 bg-green-950 rounded-2xl px-3 py-1 flex items-center gap-2">
          <span className="text-xl">
            <IoStar />
          </span>
          {movieDetail.vote_average.toFixed(1)}
        </p>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {movieDetail?.title}
          </h1>
          <p className="text-sm text-blue-400 mt-5">{movieDetail?.tagline}</p>
        </div>

        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Collection
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
              {movieDetail.belongs_to_collection
                ? movieDetail?.belongs_to_collection?.name
                : "Individual movie"}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Language{" "}
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              {movieDetail?.spoken_languages?.map((language, index) => (
                <span key={index}>{language?.english_name + ", "}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Status
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {movieDetail.status}
            </p>
          </div>
        </div>

        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Release Date
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              {movieDetail?.release_date?.split("-").reverse().join("-")}
            </p>
          </div>
        </div>
        <div>
          <p className="w-full text-center text-gray-600 dark:text-gray-300 mt-7">
            <span className="text-blue-400">Discription</span> :{" "}
            {movieDetail?.overview}
          </p>
        </div>

        <div>
          <div className="w-6 h-6  cursor-pointer"></div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="top-6 left-6  bg-white/85 hover:bg-white text-black px-5 py-3 w-[49%] shadow-lg transition-all duration-300"
            >
              ← Back
            </button>
            <button
              onClick={() => navigate(`/trailer/${movieDetail.id}`)}
              className="top-6 left-6  bg-red-700 hover:bg-red-600 text-white px-5 py-3 w-[49%] shadow-lg transition-all duration-300"
            >
              Watch Trailer →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
