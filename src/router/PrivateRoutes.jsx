// import React, { Children, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../Components/dashbord/Layout/Layout';

const PrivateRoutes = ({ isLogin}) => {
   
  return  isLogin?.length ? <Layout />: <Navigate to="/form" replace/>
}

export default PrivateRoutes;