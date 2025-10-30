import React from 'react'
import { Home } from '../NavbarComponents/Home'
import { About } from '../NavbarComponents/About'
import { Contacts } from '../NavbarComponents/Contacts'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='bg-white p-5 flex gap-20  justify-evenly'>
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
  )
}
