import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { Notification } from '~/types';

// export interface Notification {
//   seen: boolean;
//   _id: string;
//   author: User;
//   user: User | string;
//   post: string | null;
//   follow?: string;
//   comment?: Comment;
//   message?: string;
//   createdAt: string;
//   updatedAt: string;
// }

const NotificationPageWrapper = styled.div`
width;100%
`;

const NotificationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAuthCheck = async () => {
      const isAuth = await getAuthorizationCheckApi();
      console.log(isAuth);
      //만약 error나면 어떻게 처리할거임
      if (typeof isAuth === 'string') {
        navigate('/');
      }
    };
    getAuthCheck();
  }, [navigate]);

  return (
    <NotificationPageWrapper>
      {dummy_notification.map((notification) => (
        <div>
          <span>{notification.comment.comment}</span>
          <span>{notification.createdAt}</span>
        </div>
      ))}
    </NotificationPageWrapper>
  );
};

export default NotificationPage;

const dummy_notification = [
  {
    seen: false,
    _id: 'id1',
    author: 'User',
    user: 'User | string',
    post: 'string | null',
    follow: 'string',
    comment: {
      _id: '보낸아이디',
      comment: '댓글1',
      author: 'User',
      post: 'String',
      createdAt: 'String',
      updatedAt: 'String',
    },
    message: 'string',
    createdAt: '방금1',
    updatedAt: '방금1',
  },
  {
    seen: false,
    _id: 'id2',
    author: 'User',
    user: 'User | string',
    post: 'string | null',
    follow: 'string',
    comment: {
      _id: '보낸아이디2',
      comment: '댓글2',
      author: 'User',
      post: 'String',
      createdAt: 'String',
      updatedAt: 'String',
    },
    message: 'string',
    createdAt: '방금2',
    updatedAt: '방금2',
  },
  {
    seen: false,
    _id: 'id3',
    author: 'User',
    user: 'User | string',
    post: 'string | null',
    follow: 'string',
    comment: {
      _id: '보낸아이디3',
      comment: '댓글3',
      author: 'User',
      post: 'String',
      createdAt: 'String',
      updatedAt: 'String',
    },
    message: 'string',
    createdAt: '방금3',
    updatedAt: '방금3',
  },
];
