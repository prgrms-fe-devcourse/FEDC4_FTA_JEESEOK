import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { readNotification } from '~/api/notification';
import Button from '~/components/common/Button';
import Header from '~/components/common/Header';
import Modal from '~/components/common/Modal';
import { Notification } from '~/types';
import NotificationCardList from './NotificationCardList';

const NotificationPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [modalState, setModalState] = useState(false);

  const getAuthCheck = async () => {
    const isAuth = await getAuthorizationCheckApi();
    if (!isAuth) {
      navigate('/');
      return;
    }

    setNotifications(
      isAuth.notifications.filter(
        (notification) => !!notification.like || !!notification.comment
      )
    );
  };

  scrollTo(0, 0);

  useEffect(() => {
    getAuthCheck();
  }, [navigate]);

  const handleAllNotificationDelete = async () => {
    await readNotification();
    await getAuthCheck();
    setModalState(false);
  };

  return (
    <NotificationPageWrapper>
      <Header isLogout />
      <NotificationPageBtnWrapper>
        {notifications.length > 0 && (
          <NotificationPageBtn onClick={() => setModalState(true)}>
            알림전체삭제
          </NotificationPageBtn>
        )}
      </NotificationPageBtnWrapper>

      {notifications.length > 0 ? (
        <NotificationCardList {...notifications} />
      ) : (
        <NotificationPageEmptyText>
          새로운 알림이 없습니다!
        </NotificationPageEmptyText>
      )}
      {modalState && (
        <Modal
          handleConfirmButtonClick={handleAllNotificationDelete}
          handleCloseButtonClick={() => setModalState(false)}
        >
          알림을 전체 삭제하시겠습니까?
        </Modal>
      )}
    </NotificationPageWrapper>
  );
};

export default NotificationPage;

const NotificationPageWrapper = styled.div`
  max-width: 425px;
  width: 100%;
`;

const NotificationPageBtn = styled(Button)`
  position: absolute;
  bottom: 90px;
  right: 20px;
  font-family: 'ONE-Mobile-Title';
  font-size: 16px;
  white-space: nowrap;
  color: rgba(47, 47, 104, 0.8);
  background-color: rgba(252, 203, 243, 1);
  width: 120px;
  height: 30px;
  border-radius: 12px;
`;

const NotificationPageBtnWrapper = styled.div`
  max-width: 425px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const NotificationPageEmptyText = styled.header`
  font-family: 'ONE-Mobile-Title';
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2f2f68;
  position: relative;
  max-width: 425px;
  width: 100%;
  height: 60px;
  font-size: 25px;
  top: 35vh;
`;
