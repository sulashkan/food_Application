import React, { useEffect, useState } from 'react'
// import useFetch from '../custom_Hook/useApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const MoviesDetail = () => {
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
   

    useEffect( () => {
        setLoading(!loading);
       const fetchData = async () => {
         try{
          const response = await fetch(url , {method : 'GET'});
          const data = await response.json();
          setData(data);
          setLoading(!loading);
         }catch(err){
           throw new Error(err);
         }
       }

       fetchData();
        
    } , [id])


  return (
    
    <div className=''>
    <div className="bg-gray-900  text-white p-6 rounded-2xl shadow-2xl max-w-3xl ml-30 mb-10 mx-auto mt-10 flex flex-col md:flex-row gap-6 ">
  
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="rounded-xl w-64 h-96 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-3xl font-bold mb-3 text-blue-400">{data.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{data.overview}</p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-400">ID:</span> {data.id}
            </div>
            <div>
              <span className="text-gray-400">IMDb ID:</span> {data.imdb_id}
            </div>
            <div>
              <span className="text-gray-400">Status:</span> {data.status}
            </div>
            <div>
              <span className="text-gray-400">Release Date:</span> {data.release_date}
            </div>
           
            <div>
              <span className="text-gray-400">Popularity:</span> {data.popularity}
            </div>
          </div>

          <Link to={`watch/${data.id}`} onClick={()=> navigate("/user")} className='bg-blue-500 p-2 rounded-md flex justify-center items-center mt-8 ml-30 object-cover w-[200px] hover:scale-105 ransition-transform duration-300'>Watch Trailer</Link>

  
        </div>
      </div>
    </div>
 </div>
  )
}

export default MoviesDetail