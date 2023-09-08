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

export const getNotification = async (): Promise<
  AxiosResponse<Notification[]>
> => {
  const data = await request.get<Notification[]>('notifications');
  return data;
};

export const readNotification = async (): Promise<
  AxiosResponse<readNotificationResponse>
> => {
  const data = await request.put<readNotificationResponse>(
    '/notifications/seen'
  );
  return data;
};

export const postNotification = async (
  notification: postNotificationRequest
): Promise<AxiosResponse<Notification>> => {
  const data = await request.post<Notification>(
    '/notifications/create',
    notification
  );
  return data;
};
