import request from '~/api';
import { Notification } from '~/types';

interface readNotificationResponse {
  n: number;
  nModified: number;
  ok: number;
}

interface postNotificationRequest {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

interface GetNotification {
  (): Promise<Notification[]>;
}

export const getNotification: GetNotification = async () => {
  const res = await request.get<Notification[]>('notifications');

  return res.data;
};

interface ReadNotification {
  (): Promise<readNotificationResponse>;
}

export const readNotification: ReadNotification = async () => {
  const res = await request.put<readNotificationResponse>(
    '/notifications/seen'
  );

  return res.data;
};

interface PostNotification {
  (notification: postNotificationRequest): Promise<Notification>;
}
export const postNotification: PostNotification = async (notification) => {
  const res = await request.post<Notification>(
    '/notifications/create',
    notification
  );
  return res.data;
};
