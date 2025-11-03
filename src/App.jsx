import React from 'react';
import Auth from './Auth';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Dummy } from './Dummy';
import User from "./components/User"
import { Home } from './NavbarComponents/Home';
import { About } from './NavbarComponents/About';
import { Contacts } from './NavbarComponents/Contacts';
import Admin from './components/Admin';
import { Profile } from './SidebarPages/Profile';
import { Settings } from './SidebarPages/Settings';
import { Help } from './SidebarPages/Help';
import  Product  from './SidebarPages/Product';
import { TopRatedMovies } from './SidebarPages/TopRatedMovies';
import { UpcomingMovies } from './SidebarPages/UpcomingMovies';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Auth/>
  },
  {
    path:'/user',
    element:<User/>,
    children:[
    {
     path:'',
     element:<Product/>,
    
    },
    {
      path:'toprated',
      element:<TopRatedMovies/>
     },
     {
      path:"upcoming",
      element:<UpcomingMovies/>
     },
      {
      path :"profile",
      element:<Profile/>
    },
    {
      path :"settings",
      element:<Settings/>
    },
    {
      path :"help",
      element:<Help/>
    }
  ]
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contacts",
    element:<Contacts/>
  },
  {
     path:"/admin",
     element:<Admin/>,
     children:[{
       path :"profile",
      element:<Profile/>
     }]
  }
]);

export const App = () => {
  return (
    // <Auth/>
    <RouterProvider router={appRouter} />
  )
};

export default App;
