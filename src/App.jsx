import React from 'react'
import './App.css'
import Home from './home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './User'
import Admin from './Admin'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import Order from './Pages/Order'
import Profile from './Pages/Profile'
import Sidebar from './Components/SideBar'
import Welcome from './Pages/Welcome'
function App() {

  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Home />,
    children:[{

    }]
  },
  {
    path: '/user',
    element: <User />,
    children:[
      {
    path: 'welcome',
    element: <Welcome />
  },
  {
    path: 'order',
    element: <Order />
  }, {
    path: "profile",
    element: <Profile/>
  }
    ]
  }, {
    path: '/admin',
    element: <Admin />
  } ])

  return (

    <RouterProvider router={appRouter} />
  )
}

export default App
