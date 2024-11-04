// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

const PrivateRoute = ({ role, ...rest }) => {
  return <Outlet />;
  // TODO：先写死用户端
  // const userRole = getUserRole();
  // console.log('userRole', userRole, role);
  // return userRole === role ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;