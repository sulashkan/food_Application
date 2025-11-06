import { useParams } from "react-router-dom";

const WatchTrailer = () => {
  const api = import.meta.env.VITE_MOVIE_APP_API_URL;
  const api_key = import.meta.env.VITE_MOVIE_APP_KEY;

  const { id } = useParams();

  let data = `${api}/movie/${id}/videos?api_key=${api_key}`;

  console.log(data);
  return (
    <div className="min-h-[83vh] flex items-center justify-center">
      id : {id}
    </div>
  );
};
export default WatchTrailer;
