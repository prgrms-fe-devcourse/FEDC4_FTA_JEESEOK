import styled from '@emotion/styled';
import { Notification } from '~/types';
import NotificationCard from './NotificationCard';

const NotificationCardList = (notifications: Notification[]) => {
  return (
    <NotificationCardListContainer>
      {Object.values(notifications)
        .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
        .map((notification) => (
          <NotificationCard key={notification._id} {...notification} />
        ))}
    </NotificationCardListContainer>
  );
};

export default NotificationCardList;

const NotificationCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
