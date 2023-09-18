import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { readNotification } from '~/api/notification';
import { Notification } from '~/types';
import NotificationCardList from './NotificationCardList';

const NotificationPageWrapper = styled.div`
  width;100%
  `;

const NotificationPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const getAuthCheck = async () => {
    const isAuth = await getAuthorizationCheckApi();
    if (!isAuth) {
      navigate('/');
      return;
    }
    setNotifications(isAuth.notifications);
  };

  useEffect(() => {
    getAuthCheck();
  }, [navigate]);

  const handleAllNotificationDelete = async () => {
    if (confirm('알림을 전체 삭제하시겠습니까?')) {
      await readNotification();
      await getAuthCheck();
    }
  };

  return (
    <NotificationPageWrapper>
      <button onClick={handleAllNotificationDelete}>알림전체 삭제</button>
      {notifications.length > 0 ? (
        <NotificationCardList {...notifications} />
      ) : (
        <div>알림이없습니다</div>
      )}
    </NotificationPageWrapper>
  );
};

export default NotificationPage;
