import { createBrowserRouter } from 'react-router-dom';
import {
  Error404Page,
  Layout,
  LoginPage,
  NotificationPage,
  PostDetailPage,
  PostEditPage,
  PostPage,
  SearchPage,
  SignupPage,
  UserEditPage,
  UserPage,
  UserPasswordPage,
} from '~/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <PostPage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
      {
        path: 'post/:postId',
        element: <PostDetailPage />,
      },
      {
        path: 'post/:postId/edit',
        element: <PostEditPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'user/:userId',
        element: <UserPage />,
      },
      {
        path: 'user/edit',
        element: <UserEditPage />,
      },
      {
        path: 'user/edit/password',
        element: <UserPasswordPage />,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
]);
