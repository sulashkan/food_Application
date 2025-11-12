import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import MoviesDetail from "./MoviesDetail";

export const WatchMovies = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}/trailers?api_key=b3d99167c1c907117790447669e1a214&language=en-US&`;

  // const { data, loading, page, totalPage, setPage } = useFetch(url, { method: "GET" });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(!loading);
      try {
        const response = await fetch(url, { method: "GET" });
        const output = await response.json();
        setData(output.youtube);
      } catch (err) {
        throw new Error(err);
      }
      setLoading(!loading)
    };

    fetchData();
  }, [id]);

  if (loading === true)
    return (
      <div className="font-bold text-4xl justify-center items-center h-full w-full">
        Loading...
      </div>
    );


  if (data.length === 0) {
    return <div>No trailers found</div>;
  }

  

  const trailer = data.filter((t) => t.type?.toLowerCase() === "trailer");

 
 
  const videoUrl = `https://www.youtube.com/embed/${trailer[0].key}`;


  return (
    <div className="flex flex-col items-center  justify-center min-h-screen min-w-[1025px] bg-black text-white">
      <h1 className="text-2xl font-bold mb-4 text-white">{trailer[0].name}</h1>

      <iframe
        width="600"
        height="400"
        src={videoUrl}
        title={trailer[0].name}
        allowFullScreen
      ></iframe>

    </div>
  );
};
