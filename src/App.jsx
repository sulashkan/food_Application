import React from "react";
import "./App.css";
import Home from "./home";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import Welcome from "./Pages/Welcome";
import Start from "./Start";
import Search from "./Pages/Search";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/user",
      element: <User />,
      children: [
        {
          index: true, 
          element: <Navigate to="welcome" replace />, 
        },
        {
          path: "welcome",
          element: <Welcome />,
        },
        {
          path: "order",
          element: <Order />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
         {
          path: "search",
          element: <Search/>,
        },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
