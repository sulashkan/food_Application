const img_api = import.meta.env.VITE_MOVIE_IMG_API;
import { useNavigate } from "react-router-dom";
import backUpImg from "../../assets/backUp.jpg";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/trailer/${id}`);
  };
  return (
    <div className="card shadow-sm  min-w-[20vw] max-w-[20vw] h-[30vw] flex flex-col justify-center gap-4 bg-[#011810] rounded-xl p-2">
      <img
        src={movie.poster_path ? `${img_api}/${movie.poster_path}` : backUpImg}
        alt={movie.title}
        className="rounded-xl h-98 object-contain"
      />

      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold"> {movie.title}</h2>
        <p>
          Release Date : {movie.release_date?.split("-").reverse().join("-")}
        </p>
        <div className="card-actions p-2">
          <button
            type="button"
            className="btn text-xl px-5 py-2 bg-green-500 rounded text-white"
            onClick={() => handleClick(movie.id)}
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
