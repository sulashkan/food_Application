import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='w-55 min-h-80 p-6 m-5 flex flex-col gap-2 bg-white shadow-inner text-gray-800 '>
       <h1 className='font-bold text-[20px]'>Dashboard</h1>

       <div className='flex flex-col gap-1'>
         <Link to="profile">👤 Profile </Link>
        <Link to="settings">⚙️ Settings</Link>
        <Link to="help">❓ Help </Link>
       </div>
    </div>
  )
}
