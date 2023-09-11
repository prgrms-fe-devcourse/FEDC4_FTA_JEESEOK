import { createBrowserRouter } from 'react-router-dom';
import {
  Error404Page,
  LoginPage,
  NotificationPage,
  PostDetailPage,
  PostEditPage,
  PostPage,
  RegisterPage,
  RootPage,
  SearchPage,
  UserEditPage,
  UserPage,
} from '~/pages';
import UserPasswordPage from '~/pages/UserPasswordPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/post',
        element: <PostPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/user/:userId',
        element: <UserPage />,
      },
      {
        path: '/notification',
        element: <NotificationPage />,
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/post/:postId',
    element: <PostDetailPage />,
  },
  {
    path: '/post/:postId/edit',
    element: <PostEditPage />,
  },
  {
    path: '/user/edit',
    element: <UserEditPage />,
  },
  {
    path: '/user/edit/password',
    element: <UserPasswordPage />,
  },
]);
