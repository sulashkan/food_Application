import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Navbar -
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
// Public Pages  -
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import FormLayout from "../components/FormLayout";
// Protcted Pages  -
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/dashbord/pages/profile/Profile";
import Orders from "../components/dashbord/pages/popular/Popular";
import HomePage from "../components/dashbord/pages/dashHome/HomePage"; // Dash - Home
import Popular from "../components/dashbord/pages/popular/Popular";
import TopRated from "../components/dashbord/pages/topRated/TopRated";
import UpComing from "../components/dashbord/pages/upComing/UpComing";
import RecentlyPlayed from "../components/dashbord/pages/recentlyPlayed/RecentlyPlayed";

const Routing = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    // console.log("logged-in user Data", userData);
    if (Object.entries(userData).length) {
      setIsLogin(true);
    }
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
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
            { index: true, element: <HomePage /> },
            { path: "popular", element: <Popular /> },
            { path: "now_playing", element: <RecentlyPlayed /> },
            { path: "upcoming", element: <UpComing /> },
            { path: "top_rated", element: <TopRated /> },
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
