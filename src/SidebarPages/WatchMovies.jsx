import { useParams } from "react-router-dom";
import useFetch from "../custom_Hook/useApi";
import React from "react";
import MoviesDetail from "./MoviesDetail";

export const WatchMovies = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b3d99167c1c907117790447669e1a214&language=en-US&`;

  const { data, loading, page, totalPage, setPage } = useFetch(url, { method: "GET" });

 
  
  if (loading)
    return (
      <div className="font-bold text-4xl justify-center items-center h-full w-full">
        Loading...
      </div>
    );

  if (data.length === 0) {
    return <div>No videos found</div>;
  }

  
  const video = data[0];
  const videoUrl = `https://www.youtube.com/embed/${video.key}`;

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen min-w-[1025px] bg-black text-white">
    
   
      <h1 className="text-2xl font-bold mb-4">{video.name}</h1>

     
      <iframe
        width="600"
        height="400"
        src={videoUrl}
        title={video.name}
        allowFullScreen
      ></iframe>

      <p className="mt-3 text-gray-400">
        Published: {video.published_at.slice(0, 10)}
      </p>

      <div className="flex justify-center items-center w-full gap-2 mt-5">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        <p>
          {page} / {totalPage}
        </p>
        {page < totalPage && (
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
