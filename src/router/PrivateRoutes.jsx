import React, { Children, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({Children , isLogin}) => {
  
      const isAuth =   isLogin?.length ? true : false;

      console.log(isAuth)
   
  return  isAuth? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;