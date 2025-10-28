import React, { useEffect, useState } from 'react'
import SignUp from '../Components/auth/signup/signUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../pages/home/Home'
import PrivateRoutes from './PrivateRoutes'
import Login from '../Components/auth/login/login'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'

const Routing = () => { 
    const [isLogin , setIsLogin]  = useState(false);

    useEffect(()=>{
       const userData = JSON.parse(localStorage.getItem("user"));
       if(userData){
           setIsLogin(userData);
        }
    },[])



    
  return (
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>


    <Route path='sign-in' element={<Login  setIsLogin={setIsLogin}/>} />
    <Route path="/sign-up" element={<SignUp />} /> 

    <Route path="*" element={<h1>Error : Page Not Found 404</h1>}/>
<Route element ={<PrivateRoutes isLogin={isLogin}> 
<Route path ="/profile" element={<h1>Welcome User </h1>} />
</PrivateRoutes> } />
</Route>


   </Routes>
   </BrowserRouter>
  )
}

export default Routing