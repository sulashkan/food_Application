import React, { useState } from "react";
import Login from "./login/login";
import SignUp from "./signup/signUp";

const FormLayout = () => {
  const [show, setShow] = useState(false);
  return show ? (
    <SignUp setShowCmp={setShow} />
  ) : (
    <Login setShowCmp={setShow} />
  );
};

export default FormLayout;
