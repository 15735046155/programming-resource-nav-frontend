// src/routes/adminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/admin/home';
import PrivateRoute from './private-route';

const AdminRoutes = () => (
  <Routes>
    <Route
      path="user"
      element={
        <PrivateRoute role="user">
          <AdminHome />
        </PrivateRoute>
      }
      role="admin"
    />
  </Routes>
);

export default AdminRoutes;