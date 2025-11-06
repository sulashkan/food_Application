import { useState } from "react";
import { Link } from "react-router-dom";
import registerInputValidation from "../../../utils/registerInputValidation.jsx"; // for validation - using Regex
import { BsEye, BsEyeSlash } from "react-icons/bs";
import app from "../../../../firebase.jsx"; // firebase imported -
import {
  getAuth,
  createUserWithEmailAndPassword,
  // updateProfile,
} from "firebase/auth";

// import { getFirestore } from "firebase/firestore";
const auth = getAuth(app); // configure firebse App  -
// import { doc, setDoc } from "firebase/firestore"; // import to store more Info   -
import Swal from "sweetalert2";
// const db = getFirestore(app);

const SignUp = ({ setShowCmp }) => {
  const [show, setShow] = useState(false); // password show Hide -
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(false);

  const [data, setData] = useState({
    fname: "",
    email: "",
    number: "",
    gender: "",
    password: "",
  });

  // Toaster

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let result = registerInputValidation(data);
    if (Object.entries(result).length) return setErrors(result);

    // Handle insetion logic  -
    try {
      setStatus(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (userCredential?.user?.uid) {
        setShowCmp(false);
        Toast.fire({
          icon: "success",
          title: "registerd successfully",
        });
      }

      // use to save aditional Info in fireBase -- **

      // await updateProfile(user, { displayName: data.fname });
      // let result = await setDoc(doc(db, "users", user.uid), {
      //   displayName: data.fname,
      //   role: "user",
      //   createdAt: new Date(),
      // });

      // console.log("result : ", result); // Not Consoling - here
    } catch (error) {
      setStatus(false);
      Swal.fire({
        icon: "error",
        title: "invalid user...",
        text: error.message,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleShow = () => {
    setShow(!show);
  };

  return (
    <div className="grid items-center justify-center min-h-screen pt-[7vh] text-white bg-black">
      <form
        className="w-[450px]  rounded-xl bg-[#011810] flex flex-col  gap-5 min-h-[400px] p-5"
        onSubmit={HandleSubmit}
      >
        <h1 className="text-center text-3xl text-white">Registration Form</h1>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="fname" className="px-3">
            Full name <span className="text-red-600">*</span> <span></span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name "
            value={data.fname}
            className=" px-3 py-2  rounded-xl bg-black-50"
            id="fname"
            name="fname"
            onChange={handleChange}
          />
          <p className="text-red-500 px-3">{errors?.fname}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="px-3">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            value={data.email}
            className=" px-3 py-2  rounded-xl bg-black-50"
            id="email"
            name="email"
            onChange={handleChange}
          />
          <p className="text-red-500 px-3">{errors?.email}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="number" className="px-3">
            Contact number <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter your contact number"
            value={data.number}
            className=" px-3 py-2  rounded-xl bg-black-50"
            id="number"
            name="number"
            onChange={handleChange}
          />
          <p className="text-red-500 px-3">{errors?.contact}</p>
        </div>

        {/* gender  */}
        <div className="flex flex-col flex-start">
          <p className="p-3">
            Select your gender <span className="text-red-600">*</span>
          </p>
          <div className="flex gap-2 px-3">
            <div className="flex">
              <input
                type="radio"
                value="male"
                className=" px-3 py-2 rounded-xl bg-black-50"
                id="male"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="gender" className="px-2">
                male
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="female"
                className=" px-3 py-2 rounded-xl bg-black-50"
                id="female"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="female" className="px-2">
                female
              </label>
            </div>
            <input
              type="radio"
              value="other"
              className=" px-3 py-2 rounded-xl bg-black-50"
              id="other"
              name="gender"
              onChange={handleChange}
            />
            <label htmlFor="other" className="px-2">
              other
            </label>
          </div>
          <p className="text-red-500 px-3">{errors?.gender}</p>
        </div>
        <div className="flex flex-col gap-2 position-relative">
          <label htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            value={data.password}
            className=" px-3 py-2  rounded-xl bg-black-50"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <button
            type="button"
            className="px-3 py-2 text-2xl rounded-xl bg-black-50 position-absolute"
            onClick={HandleShow}
          >
            {show ? <BsEyeSlash /> : <BsEye />}
          </button>
        </div>
        <p className="text-red-500 px-3">{errors?.password}</p>
        <p className="mx-auto">
          Have an account -{" "}
          <Link onClick={() => setShowCmp(false)} className="text-blue-700">
            Login Here
          </Link>
        </p>
        <button
          type="submit"
          className="border px-3 py-2 rounded-4xl bg-green-700 text-white m-auto w-[50%]"
          disabled={status}
        >
          {status ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
