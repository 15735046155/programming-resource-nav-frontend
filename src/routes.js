import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import { lazyRouter } from '@utils-lib/react-module';

// 公共部分
const Layout = lazy(() => import('@/pages/layout'));

// 用户端
const Home = lazy(() => import('@/pages/user/home'));
const My = lazy(() => import('@/pages/user/my'));
const WorkDetail = lazy(() => import('@/pages/user/works-detail'));
const ArticleDetail = lazy(() => import('@/pages/article-detail'));

// 管理端
const AdminHome = lazy(() => import('@/pages/admin/home'));
const WorksList = lazy(() => import('@/pages/admin/works-list'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // {
      //   path: '/user',
      //   children: [
      //     {
      //       path: '/user/home',
      //       element: <Home />,
      //     },
      //     {
      //       path: '/user/my',
      //       element: <My />,
      //     },
      //     {
      //       path: '/user/works-detail',
      //       element: <WorkDetail />,
      //     },
      //   ],
      // },
      // {
      //   path: '/admin',
      //   children: [
      //     {
      //       path: '/admin/home',
      //       element: <AdminHome />,
      //     },
      //     {
      //       path: '/admin/works-list',
      //       element: <WorksList />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: `/article/:id`,
    element: <ArticleDetail />
  },
  {
    path: '/admin',
    element: <AdminHome />,
  }
];

export default () => useRoutes(routes);
