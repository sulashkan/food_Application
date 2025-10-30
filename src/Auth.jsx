import React from "react";
import "./App.css";
import { useState } from "react";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Admin from "./components/Admin";
import User from "./components/User";
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

        // alert("SignUp succesfull");
        setFormData({ password: "", email: "" });
        // setShowLogin(!showLogin);
        // setUser("user");
        setIsLogin(!isLogin);
        navigate("/user");
      } catch (err) {
        alert("User Already exist");
        setIsLogin(!isLogin)
        console.log(err);
      }
    } else {
      try {
        setMessage("");
        if (formData.email === "admin@gmail.com" &&  formData.password === "Admin@123") {
            console.log(formData);
            await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          console.log(formData.email);
        //   setUser("admin");
          setShowLogin(!showLogin);
          navigate("/admin");
        } else {
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
        //   alert("User Logged In");
          setShowLogin(!showLogin);
          navigate("/user");
        //   setUser("user");
        }
      } catch (err) {
        alert("Register First");
        console.log(err);
        setIsLogin(!isLogin);
      }
      // })
    }

    setFormData({ password: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen bg-amber-400" /*style={{display:"flex", flexDirection:"column", justifyContent:"center" , alignItems:"center", width:"100vw" , height:"100vh", backgroundColor:"lightcoral" }}*/
    >
      <div>
        <h1 className="ml-15 text-3xl font-bold mb-2">
          {isLogin ? "Login" : "Signup"} Form
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            width: "300px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* <input type="text" placeholder='name' value={formData.name} name="name" onChange={handleChange}></input>     */}

          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2.5 border-r-4 "
          ></input>
          <div className="flex border p-2.5 border-r-4 ">
            <input
              type={eye ? "password" : "text"}
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="border-none"
            ></input>
            <button type="button" onClick={() => setEye(!eye)}>
              {eye ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-700 text-[12px]">{message}</p>
          <button
            onClick={Authentication}
            style={{
              padding: "8px",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderEndEndRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="flex gap-2 mt-3.5 ml-12">
          <p>{isLogin ? "Dont have Account " : "Already have an Account"} </p>
          <button
            onClick={() =>
              setIsLogin(!isLogin) ||
              setMessage("") ||
              setFormData({ email: "", password: "" })
            }
            className="text-white underline cursor-pointer"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
