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

export const getNotification = async (): Promise<Notification[]> => {
  const result = await request.get<Notification[]>('notifications');
  return result.data;
};

export const readNotification = async (): Promise<readNotificationResponse> => {
  const result = await request.put<readNotificationResponse>(
    '/notifications/seen'
  );
  return result.data;
};

export const postNotification = async (
  notification: postNotificationRequest
): Promise<Notification> => {
  const result = await request.post<Notification>(
    '/notifications/create',
    notification
  );
  return result.data;
};
