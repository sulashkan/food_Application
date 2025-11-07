import { useNavigate } from "react-router-dom";
const img_api = import.meta.env.VITE_MOVIE_IMG_API;
import backUpImg from "../../assets/backUp.png";
import { IoStar } from "react-icons/io5";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie-details/${movie.id}`)}
      className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl h-full min-w-[18vw]  transition-all duration-500 bg-gray-800"
    >
      <div>
        <img
          src={
            movie.poster_path ? `${img_api}/${movie.poster_path}` : backUpImg
          }
          alt={movie.title}
          className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <p className="text-yellow-500 absolute top-2 right-2 bg-green-950 rounded-2xl px-3 py-1 flex items-center gap-2">
          <span className="text-xl">
            <IoStar />
          </span>
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
        <h2 className="text-2xl font-bold truncate">{movie.title} </h2>
        <p className="text-xl text-gray-300">
          Release: {movie.release_date?.split("-").reverse().join("-") || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
