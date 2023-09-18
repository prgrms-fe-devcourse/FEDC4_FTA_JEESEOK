import request from '~/api';
import { Notification } from '~/types';

interface GetNotification {
  (): Promise<Notification[] | never>;
}

export const getNotification: GetNotification = async () => {
  const res = await request.get<Notification[]>('notifications');

  return res.data;
};

interface readNotificationResponse {
  n: number;
  nModified: number;
  ok: number;
}

interface ReadNotification {
  (): Promise<readNotificationResponse | never>;
}

export const readNotification: ReadNotification = async () => {
  const res = await request.put<readNotificationResponse>(
    '/notifications/seen'
  );

  return res.data;
};

interface postNotificationRequest {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

interface PostNotification {
  (notification: postNotificationRequest): Promise<Notification | never>;
}

export const postNotification: PostNotification = async (notification) => {
  const res = await request.post<Notification>(
    '/notifications/create',
    notification
  );
  return res.data;
};
