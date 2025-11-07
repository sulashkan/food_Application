import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import React from "react";

export const PrivateRoute = ({children}) => {

    const {loading, user} = useAuth();

    if(loading) return <div className="flex justify-center items-center min-h-[600px] font-bold text-4xl">loading....</div>

     if (!user) {
    return <Navigate to="/" />;
     }

  return children;
}