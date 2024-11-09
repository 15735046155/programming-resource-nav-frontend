import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Content } from 'antd';
import Head from './head';
import './index.scss';

const LayoutUser = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Content>
        <Head />
        <div className="container">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default LayoutUser;