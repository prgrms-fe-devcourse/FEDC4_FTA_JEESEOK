import { createBrowserRouter } from 'react-router-dom';
import {
  Error404Page,
  LoginPage,
  NotificationPage,
  PostDetailPage,
  PostEditPage,
  PostPage,
  RootPage,
  SearchPage,
  SignupPage,
  UserEditPage,
  UserPage,
  UserPasswordPage,
} from '~/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
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
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'user/:userId',
        element: <UserPage />,
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
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/post/create',
    element: <PostEditPage />,
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
