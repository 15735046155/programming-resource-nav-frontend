// src/routes/userRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/user/home';
import PrivateRoute from './private-route';

const UserRoutes = () => (
  <Routes>
    <Route
      path="user"
      element={
        <PrivateRoute role="admin">
          <Home />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default UserRoutes;