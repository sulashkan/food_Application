import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("user");

  return isLoggedIn ? <Navbar /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;
