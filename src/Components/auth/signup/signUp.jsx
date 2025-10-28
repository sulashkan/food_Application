import React, { useState } from 'react'
import app from '../../../../firebase.jsx'   // firebase imported - 
import { getAuth , createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 
import { Link, useNavigate } from 'react-router-dom';
// import { getFirestore } from 'firebase/firestore';
const auth  = getAuth(app);   // configure firebse App  -  
// import { doc ,setDoc } from "firebase/firestore"   // import to store more Info   - 
// const db = getFirestore(app);




const SignUp = () => {
    const navigate = useNavigate();
    const [show , setShow] = useState(false);     // password show Hide -

    const [data , setData] = useState({
        fname:"",
        email : "" , 
        number:"",
        gender:"",
        password : ""

    })
const HandleSubmit = async (e) =>{
    e.preventDefault();

    try {
        console.log(data);
        return;

 const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
  const user = userCredential.user;
  user.uid ? navigate("/").then(()=>alert("login -SuccessFull")) : alert("Login Failed")

    // set displayName  - 
//  const result  =  await updateProfile(user, { displayName: data.fname });
//   let result =  await setDoc(doc(db, "users", user.uid), {
//     displayName: data.fname,
//     role: "user",
//     createdAt: new Date(),
//   });

//   console.log("result : " , result); // Not Cosoling - here 

    } catch (error) {
        console.log(error)
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
    <form className='w-[450px]  rounded-xl bg-white flex flex-col  gap-5 min-h-[400px] p-5'  onSubmit={HandleSubmit}> 
        <h1 className='text-center text-3xl text-blue-600'>Registration Form</h1>

 <div className='flex flex-col gap-1 '>
            <label htmlFor="fname" className='px-3'> Full name</label>
            <input type="text" placeholder='Enter your full name ' value={data.fname} className=' px-3 py-2  rounded-xl bg-blue-100' id="fname" name="fname" onChange={handleChange}/>

        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='px-3'> Email</label>
            <input type="text" placeholder='Enter your email' value={data.email}  className=' px-3 py-2  rounded-xl bg-blue-100' id="email" name="email" onChange={handleChange}/>
        </div>

         <div className='flex flex-col gap-1'>
            <label htmlFor="number" className='px-3'> contact number </label>
            <input type="number" placeholder='Enter your contact number' value={data.number}  className=' px-3 py-2  rounded-xl bg-blue-100' id="number" name="number" onChange={handleChange}/>
        </div>

{/* gender  */}
<div className='flex flex-col flex-start'>
            <p className='p-3'> Select your gender</p>
         <div className='flex gap-2 px-3'>
           <div className='flex' >
            <input type="radio" value="male"  className=' px-3 py-2 rounded-xl bg-blue-100' id="male" name="gender" onChange={handleChange}/>
             <label htmlFor="gender" className='px-2'> male</label>
           </div>
           <div>
             <input type="radio"  value="female"  className=' px-3 py-2 rounded-xl bg-blue-100' id="female" name="gender" onChange={handleChange}/>
               <label htmlFor="female" className='px-2'> female</label>
           </div>
            <input type="radio" value="other"  className=' px-3 py-2 rounded-xl bg-blue-100' id="other" name="gender" onChange={handleChange}/>
              <label htmlFor="other" className='px-2'> other</label>
        </div>
</div>
         <div className='flex flex-col gap-2 position-relative'>
            <label htmlFor="password"> Password </label>
            <input type={show ?"text" : "password"} placeholder='Enter your Password' value={data.password} className=' px-3 py-2  rounded-xl bg-blue-100' id='password' name="password" onChange={handleChange}/>
            <button type='button' className='px-3 py-2  rounded-xl bg-blue-100 position-absolute' onClick={HandleShow}>{show?"Hide" : "show"}</button>
        </div>
        <p className='mx-auto'>Have an account - <Link to="/sign-in" className='text-blue-700'> Login Here </Link></p>
                <button type='submit' className='border px-3 py-2 rounded-4xl bg-green-700 text-white m-auto w-[50%]'> Submit </button>


    </form>
  )
}

export default SignUp