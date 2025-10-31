import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const About = () => {
  return (
   <div>  
          <Navbar/>
          <div className='text-black flex justify-center items-center min-h-131'>About</div>
          <Footer/>
       </div>
  )
}
