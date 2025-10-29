import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import app from '../../../firebase.jsx'   // firebase imported - 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import validateLoginInput from '../../utils/login_input_validate.jsx';
const auth  = getAuth(app);   // configure firebse App  - 






const Login = ({setShowCmp , setIsLogin}) => {

    const navigate = useNavigate();

    const [show , setShow] = useState(false);     // password show Hide - 
    const [errors , setErrors] = useState([]);

    const [data , setData] = useState({
        email : "" , 
        password : "" 
    });
    
const HandleSubmit = async (e) =>{
    e.preventDefault();   

    //  Authentication - 
let result  = validateLoginInput(data.email , data.password);

 if(Object.entries(result).length) {
      setErrors(result);
        return;
    }

    try {
    const credentials =   await  signInWithEmailAndPassword(auth, data.email, data.password);
    if(credentials?.user?.providerData.length){

        setIsLogin(credentials?.user?.providerData);
        localStorage.setItem("user", JSON.stringify(credentials?.user?.providerData));
        navigate("/dashboard");
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
            <p className="text-red-500 px-3">{errors?.email}</p>

        </div>
         <div className='flex flex-col gap-2 position-relative'>
            <label htmlFor="password"> Password </label>
            <input type={show ?"text" : "password"} placeholder='Enter your Password' value={data.password} className=' px-3 py-2  rounded-xl bg-blue-100' id='password' name="password" onChange={handleChange}/>
            <button type='button' className='px-3 py-2  rounded-xl bg-blue-100 position-absolute' onClick={HandleShow}>{show?"Hide" : "show"}</button>

        </div>
        <p className="text-red-500 px-3">{errors?.password}</p>
        <p className='mx-auto'>  don't Have an account  -  <Link onClick={()=>setShowCmp(true)} className='text-blue-500'> Register Here </Link></p>
        <button type='submit' className='border px-3 py-2 rounded-4xl bg-green-700 text-white m-auto w-[50%]'> Submit </button>

    </form>
  )
}

export default Login;