import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataNotFound from "../../components/notFound/DataNotFound";

const WatchTrailer = () => {
  const api = import.meta.env.VITE_MOVIE_APP_API_URL;
  const api_key = import.meta.env.VITE_MOVIE_APP_KEY;
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const videoRes = await fetch(
        `${api}/movie/${id}/videos?api_key=${api_key}`
      );
      let result = await videoRes.json();
      result = result?.results?.find(
        (mvt) =>
          mvt.site === "YouTube" &&
          mvt.official === true &&
          mvt.type === "Trailer"
      );
      // console.log(result);
      setData(result);
    };

    fetchData();
  }, [id, api, api_key]);

  return data?.key ? (
    <div className="flex flex-col items-center justify-center w-screen bg-black relative h-[82.5vh] pt-5">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-18 left-15 bg-green-900 hover:bg-green-700 text-white  px-5 py-2 border-0 outline-0 rounded-xl shadow-lg transition-all duration-300"
      >
        ← Back
      </button>

      <iframe
        src={`https://www.youtube.com/embed/${data?.key}?language=`}
        title="Movie Player"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
        className="w-full min-h-[100%] rounded-2xl shadow-2xl border border-gray-700"
      ></iframe>
    </div>
  ) : (
    <DataNotFound type={"Video"} />
  );
};
export default WatchTrailer;
