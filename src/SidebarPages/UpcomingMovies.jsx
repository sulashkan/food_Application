import React, { useEffect ,useState } from 'react'


const API_KEY = 'bc17906574f644dfdbba58c366c22e10';
const BASE_URL = 'https://api.themoviedb.org/3';

export const UpcomingMovies =  () => {

   
    const [data , setData] = useState([]);
    const url =  `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const options = {method: 'GET', headers: {accept: 'application/json'}};
   
      async function fetchData(){
      try{
        const response = await fetch(url,options);
        const output= await response.json();
        setData(output?.results);
        console.log(data);

      }catch(err){
        console.log(err);
      }
   }
 useEffect( () => {
    fetchData();
 },[]);



  return (
    <div className="flex flex-wrap justify-center items-center gap-5  min-h-[10vh] text-2xl">
      {
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
  )
}
