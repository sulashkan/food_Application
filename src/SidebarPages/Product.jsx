import { useEffect, useState } from "react";
import React from "react";
const api_key = "b3d99167c1c907117790447669e1a214";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2Q5OTE2N2MxYzkwNzExNzc5MDQ0NzY2OWUxYTIxNCIsIm5iZiI6MTc2MTgxODA2Mi44MjUsInN1YiI6IjY5MDMzNWNlNjAxMjNjYTQ1NzZlODkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n4GIRt-Lyj210IL-YhTbV0PRYspzmovUcrZyyjwwPB0";

const Product = () => {
  const [data, setData] = useState([]);

  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchData = async () => {
      const result = await fetch(url, {
        method: "GET",
        headers,
      });
      let outPut = await result.json();
      console.log(outPut);
      setData(outPut?.results);
       console.log("sumit");
       console.log(data);
    };

  useEffect(() => {
    fetchData();
  },[]);

//   console.log(data);
  return (
    <div className="flex flex-wrap justify-center items-center gap-5  min-h-[10vh] text-2xl">
      {data &&
        data.map((movie, index) => (
          <div className="card bg-base-100 w-60 min-h-70 shadow-sm p-2 hover:scale-" key={index + 1}>
            <figure className="px-1 pt-10">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[1rem] ">{movie.original_title}</h2>
              <p className="text-[22px]">{movie.overview?.slice(0, 30) + "..."}</p>
              <div className="card-actions  min-h-2 mt-3 hover:scale-95 ">
                <button className="btn btn-primary border text-[1rem] rounded-md p-2 bg-amber-400 hover:bg-amber-900 hover:text-white">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;