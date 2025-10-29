import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Navbar - 
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/Footer";
// Public Pages  - 
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import FormLayout from "../Components/FormLayout";
// Protcted Pages  -
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Components/dashbord/profile/Profile"
import Orders from "../Components/dashbord/oders/Orders";

const Routing = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("logged-in user Data", userData);
    if (Object.entries(userData).length) {
      setIsLogin(true);
    }
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:  <>
        <Navbar />
        <Footer />
      </>,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/form",
          element: <FormLayout setIsLogin={setIsLogin} />,
        },

        {
          path: "dashboard",
          element: <PrivateRoutes isLogin={isLogin} />,
          children: [
            { index:true, element: <h1>Dash Home</h1> },
            { path: "profile", element: <Profile /> },
            { path: "orders", element: <Orders /> },
          ],
        },
        {
          path: "*",
          element: <h1>Error : Page Not Found 404</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routing;
