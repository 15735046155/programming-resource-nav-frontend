import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import { lazyRouter } from '@utils-lib/react-module';

// 公共部分

// 用户端
const Layout = lazy(() => import('@/pages/user/layout'));
const Home = lazy(() => import('@/pages/user/home'));
const My = lazy(() => import('@/pages/user/my'));
const PublishCourse = lazy(() => import('@/pages/user/publish-source'));
const ArticleDetail = lazy(() => import('@/pages/user/article-detail'));
const CourseDetail = lazy(() => import('@/pages/user/course-detail'));

// 管理端
const AdminHome = lazy(() => import('@/pages/admin/home'));
const ExamineList = lazy(() => import('@/pages/admin/examine-list'));
const LayoutCom = lazy(() => import('@/pages/admin/layout'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user',
    element: <Layout />,
    children: [
      {
        path: `public-course`, // 用户 - 发布文章
        element: <PublishCourse />
      },
      {
        path: `article/:id`, // 用户 - 文章详情
        element: <ArticleDetail />
      },
      {
        path: `course/:id`, // 用户 - 课程详情
        element: <CourseDetail />
      },
      {
        path: `my`, // 用户 - 我的
        element: <My />
      },
    ]
  },
  {
    path: '/admin/',
    element: <LayoutCom />,
    children: [
      {
        path: '', // 管理 - 首页
        element: <AdminHome />,
      },
      {
        path: 'examine-list', // 审核列表
        element: <ExamineList />,
      },
    ]
  }
];

export default () => useRoutes(routes);
