import { AxiosResponse } from 'axios';
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
  (): Promise<AxiosResponse<Notification[]>>;
}

export const getNotification: GetNotification = async () => {
  const data = await request.get<Notification[]>('notifications');

  return data;
};

interface ReadNotification {
  (): Promise<AxiosResponse<readNotificationResponse>>;
}

export const readNotification: ReadNotification = async () => {
  const data = await request.put<readNotificationResponse>(
    '/notifications/seen'
  );

  return data;
};

interface PostNotification {
  (notification: postNotificationRequest): Promise<AxiosResponse<Notification>>;
}
export const postNotification: PostNotification = async (notification) => {
  const data = await request.post<Notification>(
    '/notifications/create',
    notification
  );
  return data;
};
