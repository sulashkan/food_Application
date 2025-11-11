import React from "react";
import "./App.css";
import { useState } from "react";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { validator } from "./utility/validator";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [eye, setEye] = useState(true);
  const [message, setMessage] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const auth = getAuth(app);

  const Authentication = async () => {
    const { email, password } = formData;
    const isValid = validator(email, password);

    if (isValid) {
      setMessage(isValid.message);
      return;
    }

    if (!isLogin) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        setFormData({ password: "", email: "" });

        setIsLogin(!isLogin);
        navigate("/user");
      } catch (err) {
        setIsLogin(!isLogin);
        throw new Error(err);
      }
    } else {
      try {
        setMessage("");
        if (
          formData.email === "admin@gmail.com" &&
          formData.password === "Admin@123"
        ) {
          
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
         
             
          setShowLogin(!showLogin);
          navigate("/admin");
        } else {
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          setShowLogin(!showLogin);
          navigate("/user");
        }
      } catch (err) {
        alert("Register First");
         setIsLogin(!isLogin);
        throw new Error(err);
       
      }
      // })
    }
    
     localStorage.setItem("user" , JSON.stringify(formData));
      setFormData({ password: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-linear-to-b from-[#868dae] to-[#02063b] text-white">
      <div className="bg-[#0e1a2b]/50 backdrop-blur-md p-10 rounded-2xl border-b-lime-600 border-b-2 w-96 border border-[#0f2e76]">
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-wide text-[#f9f9f9]">
          {isLogin ? "Login" : "Signup"} Form
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#1f2a44] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0063e5]"
          />

          <div className="relative">
            <input
              type={eye ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#1f2a44] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0063e5]"
            />
            <button
              type="button"
              onClick={() => setEye(!eye)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              {eye ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <p className="text-red-500 text-sm">{message}</p>

          <button
            onClick={Authentication}
            className="w-full bg-[#0063e5] hover:bg-[#0483ee] text-white font-semibold py-3 rounded-md transition-all"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="flex justify-center gap-2 mt-5 text-sm text-gray-300">
          <p>
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setFormData({ email: "", password: "" });
            }}
            className="text-[#0063e5] hover:text-[#0483ee] font-semibold underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
