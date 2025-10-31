import React from 'react'
import { Home } from '../NavbarComponents/Home'
import { About } from '../NavbarComponents/About'
import { Contacts } from '../NavbarComponents/Contacts'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='bg-white p-5 flex gap-20  justify-evenly border-b-[1px]'>
        <h1 className="text-xl font-semibold text-blue-600">MyApp</h1>
        <div className='flex gap-7 justify-center items-center'>
            <Link to="/home" className="hover:text-blue-900 hover:delay-100" >Home</Link>
            <Link to="/about" className="hover:text-blue-900 hover:delay-100">About</Link>
            <Link to="/contacts" className="hover:text-blue-900 hover:delay-100">Contacts</Link> 
        </div>
        
         <div className='flex gap-5'>
             <Link to='/user' className='flex border rounded-3xl  w-10 h-10 justify-center items-center bg-white hover:bg-gray-300'> 👤</Link>
              <button onClick={() => navigate('/')} className='border-none rounded-md bg-black hover:bg-red-600 hover:delay-100 text-white p-2 '>
               Log Out  
            </button> 
         </div>
         

    </div>

//     <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><a>Homepage</a></li>
//         <li><a>Portfolio</a></li>
//         <li><a>About</a></li>
//       </ul>
//     </div>
//   </div>
//   <div className="navbar-center">
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-end">
//     <button className="btn btn-ghost btn-circle">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
//     </button>
//     <button className="btn btn-ghost btn-circle">
//       <div className="indicator">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
//         <span className="badge badge-xs badge-primary indicator-item"></span>
//       </div>
//     </button>
//   </div>
// </div>
  )
}
