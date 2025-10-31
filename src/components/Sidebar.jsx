import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate();

  function handler(e){
    const path = e.target.value;
    if(path){
      navigate(path);
    }
  }
  return (
    <div className='w-55 min-h-80 p-6 m-5 flex flex-col gap-2 bg-white shadow-inner text-gray-800 '>
       <h1 className='font-bold text-[20px]'>Dashboard</h1>

       <div className='flex flex-col gap-1'>
         <Link to="profile">👤 Profile </Link>
         <Link to="settings">⚙️ Settings</Link>
         <Link to="help">❓ Help </Link>
         <h1 className='font-bold'>Movies</h1>
        <select onChange={handler} className='bg-black text-white p-1 border rounded-md'>
          
           <option value="/user">Popular movies</option>
           <option value="popular">TopRated movies</option>
           <option value="upcoming">Upcoming movies</option>
        </select>
       </div>
    </div>
  )
}
