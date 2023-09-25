import request from '~/api';
import { User } from '~/types';

interface PutMyInformation {
  (fullName: string, username: string): Promise<User | never>;
}

export const putMyInformation: PutMyInformation = async (
  fullName,
  username
) => {
  const res = await request.put<User>('/settings/update-user', {
    fullName,
    username,
  });

  return res.data;
};

interface PutPassword {
  (password: string): Promise<void | never>;
}

export const putPassword: PutPassword = async (password) => {
  const res = await request.put('/settings/update-password', { password });

  return res.data;
};
