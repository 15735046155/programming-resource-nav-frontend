import React, { Suspense, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

import { $router } from './router';
import Routers from './routes';
import './App.scss';

const App = () => {
  const navigate = useNavigate();
  const _location = useLocation();

  useLayoutEffect(() => {
    $router._setRouterInstance(navigate);
  }, []);

  return (
    <Suspense
      fallback={
        <div style={{ width: '100vw', height: '100vh' }}>
          <Spin tip="页面加载中..."> </Spin>
        </div>}>
      <Routers key={_location.pathname} />
    </Suspense>
    // <Router>
    //   {/* <li><Link to="/login">登录</Link></li> */}

    //   <Routes>
    //     <Route path="/" element={<Home />} ></Route>
    //     <Route path="/login" element={<Login />} ></Route>
    //     <Route path="/admin" element={<AdminHome />} ></Route>
    //     <Route path="/user" element={<UserHome />} ></Route>
    //     {/* <Route path="/*" element={<PublicRoutes />} />
    //     <Route path="/admin/*" element={<AdminRoutes />} />
    //     <Route path="/user/*" element={<UserRoutes />} />
    //     <Route path="/" element={<PublicRoutes />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
