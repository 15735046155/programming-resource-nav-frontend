import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const LayoutCom = () => {
  const items =[
    {
      key: '1',
      label: '审核列表',
    },
    {
      key: '2',
      label: '配置列表',
    },
  ];
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <div className="flex-vcenter ptb-20 pl-30">
          <img className="demo-logo-vertical" src="https://s.17win.com/snack/115/65a66a4310cd42a3816b3d3b82df293e.png" />
          <span className="fc-gray-white fs-20 ml-10">管理端</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutCom;