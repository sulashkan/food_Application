import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import app from '../../../../firebase.jsx'   // firebase imported - 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const auth  = getAuth(app);   // configure firebse App  - 





const Login = ({setIsLogin}) => {
    const navigate = useNavigate();
    const [show , setShow] = useState(false);     // password show Hide - 

    const [data , setData] = useState({
        email : "" , 
        password : "" 
    });
    
const HandleSubmit = async (e) =>{
    e.preventDefault();

    try {
    const credentials =   await  signInWithEmailAndPassword(auth, data.email, data.password);
    if(credentials?.user?.providerData.length){

        setIsLogin(credentials?.user?.providerData);
        localStorage.setItem("user", JSON.stringify(credentials?.user?.providerData));
        navigate("/profile");
    }


    } catch (error) {
        console.log({code : error.code , message : error.message});
}
     
    
}

    const handleChange = (e) =>{
        const { name , value } = e.target;

setData((prev) =>({
    ...prev , 
    [name] : value

}))};

const HandleShow = () =>{
    setShow(!show);
}


  return (
    <form className='w-[450px] rounded-xl bg-white flex flex-col  gap-5 min-h-[350px] p-5'  onSubmit={HandleSubmit}> 
        <h1 className='text-center text-3xl text-blue-600'>Login Form</h1>

        <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='ps-2'> Email</label>
            <input type="text" placeholder='Enter your email' value={data.email}  className=' px-3 py-2  rounded-xl bg-blue-100' id="email" name="email" onChange={handleChange}/>

        </div>
         <div className='flex flex-col gap-2 position-relative'>
            <label htmlFor="password"> Password </label>
            <input type={show ?"text" : "password"} placeholder='Enter your Password' value={data.password} className=' px-3 py-2  rounded-xl bg-blue-100' id='password' name="password" onChange={handleChange}/>
            <button type='button' className='px-3 py-2  rounded-xl bg-blue-100 position-absolute' onClick={HandleShow}>{show?"Hide" : "show"}</button>

        </div>
        <p className='mx-auto'>  don't Have an account  -  <Link to="/sign-up" className='text-blue-500'> Register Here </Link></p>
        <button type='submit' className='border px-3 py-2 rounded-4xl bg-green-700 text-white m-auto w-[50%]'> Submit </button>

    </form>
  )
}

export default Login;