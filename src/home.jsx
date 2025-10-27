import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "./firebase";
import Admin from "./Admin";
import User from "./User";
import { Validator } from "./validatore";

const auth = getAuth(app);

function Home() {




    //TODO:  EMAIL AND PASSWORD SHOULD BE ONE STATE
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [show, setShow] = useState(true);
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false); //TODO: spelling is incorrect mistake
    const [userRole, setUseRole] = useState(null);
    const [validate, setvalidate] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("");
    //Async Await   



    //TODO: this should be a heler function

    // const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValid=Validator(formData)
if(!isValid){
    return 
}

    const singupUser = async () => {

        setvalidate(true);
        if (!emailpattern.test(formData.email)) {
            setEmailError("Email pattern dosen't match")
            setvalidate(false);
        }
        if (!passwordRegex.test(formData.password)) {
            setPasswordError("Password contain atleast one Uppercase, one lowercase, one number and one specail charachter and have minmum 8 charachter")
            setvalidate(false);
        }
        if (validate) {

            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            alert("Successfully Registered!!");
            setUseRole("user");
            setShowRegister(false);
            setEmailError("");
            setPasswordError("");
        }


    }


    const HandleShow = () => {
        setShow(!show);
    }

    //TODO: it should be moved to the constants folder  
    const singinUser = () => {

        if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
            setUseRole("admin")
            setShowLogin(false);
        }
        else (
            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then(() => {
                    setUseRole("user"),
                        alert("logged in"),
                        setShowLogin(false)
                })
                .catch((error) => {
                    console.error("Error code:", error.code);
                    console.error("Error message:", error.message);
                    alert("Invalid user/password or user not exist");
                    setShowLogin(false);
                    setShowRegister(true);
                    setFormData({ email: "", password: "" });
                })
        )

    }
    const handleClick = (e) => {
        if (showLogin) {
            setShowLogin(false);
            setShowRegister(true);
            setFormData({ email: "", password: "" });
        } else {
            setShowLogin(true);
            setShowRegister(false);
            setFormData({ email: "", password: "" });
        }
    }

    const handleLogout = (e) => {
        setUseRole(null);
        setShowLogin(true);
        setFormData({ email: "", password: "" });
    }

    const hanldleinput = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        })
    }
    return (

        <>
            {showLogin && (

                <div className="flex flex-col h-screen w-full justify-center items-center" >
                    <h1 className="text-[60px] mb-5">Login</h1>
                    <form className="cl3">
                        <div className="flex w-[400px] justify-between items-center">
                            <label className="text-[23px] font-serif">Email</label>
                            <input type="email" name="email" value={formData.email} className="text-center h-[30px] w-[300px] border-solid border-[1.5px] border-gray-300 " placeholder="Enter You Email" onChange={hanldleinput} required />

                        </div>
                        <span value={emailError}></span>
                        <div className="flex w-[400px] justify-between items-center">
                            <label className="text-[23px] font-serif" >Password</label>
                            <input type={show ? "password" : "text"} name="password" value={formData.password} className="text-center h-[30px] w-[300px] border-solid border-[1.5px] border-gray-300 absolute ml-[100px]" placeholder="Enter You Password" onChange={hanldleinput} required
                            />
                            <button type="button" className="relative mr-[10px]" onClick={HandleShow}>{show ? "Show" : "Hide"} </button>
                        </div>
                        <button type="button" onClick={singinUser} className="h-[45px] w-20 text-[20px] text-white bg-blue-500 rounded-[25px] cursor-pointer" >Login</button>
                    </form>
                    <p onClick={handleClick} className="text-blue-600 hover:underline mt-6 cursor-pointer">dont't have any account?Sing-up</p>
                </div>
            )}

            {showRegister && (

                <div className="flex flex-col h-screen w-full justify-center items-center" >
                    <h1 className="text-[60px] mb-5">Registration</h1>
                    <form className="cl3">
                        <div className="flex justify-between w-[400px] items-center">
                            <label className="text-[23px] font-serif">Email</label>
                            <input type="email" name="email" value={formData.email} className="text-center h-[30px] w-[300px] border-solid border-[1.5px] border-gray-300 " placeholder="Enter You Email" onChange={hanldleinput} required />

                        </div>
                        <div className="flex justify-between w-[400px] items-center">
                            <label className="text-[23px] font-serif" >Password</label>
                            <input type={show ?"password" : "text"} name="password" value={formData.password} className="text-center h-[30px] w-[300px] border-solid border-[1.5px] border-gray-300 absolute ml-[100px]" placeholder="Enter You Password " onChange={hanldleinput} required />
                            <button type="button" className="relative mr-[10px]" onClick={HandleShow}>{show ? "Show" : "Hide"} </button>
                        </div>

                        <button type="button" onClick={singupUser} className="h-[45px] w-[100px] text-[20px] text-white bg-blue-500 rounded-[25px] cursor-pointer" >Register</button>
                    </form>
                    <p onClick={handleClick} className="text-blue-600 hover:underline mt-6 cursor-pointer">already have an account?Sing-in</p>
                </div>
            )}

            {userRole === "admin" && <Admin logout={handleLogout} />}
            {userRole === "user" && <User logout={handleLogout} />}

        </>
    )
} export default Home;