// src/routes/publicRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/user/home';
import Login from '../pages/login';
// import ArticleDetail from '../pages/article-detail';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={Home} />
    <Route path="/login" element={Login} />
    {/* <Route path="/article/:id" element={ArticleDetail} /> */}
  </Routes>
);

export default PublicRoutes;