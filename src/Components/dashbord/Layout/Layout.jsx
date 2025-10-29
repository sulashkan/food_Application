import React from 'react'
import SideBar from './sideBar/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

   <div className='flex justify-between  min-h-[80vh]'> 
    <SideBar /> 
    <div className='w-[80vw] bg-amber-200 border border-red-500 flex justify-center , items-center'>
    <Outlet />
    </div>

   </div>
  )
}

export default Layout