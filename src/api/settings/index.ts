import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

interface PutMyInformation {
  (fullName: string, username: string): Promise<AxiosResponse<User | false>>;
}

export const putMyInformation: PutMyInformation = async (
  fullName,
  username
) => {
  const data = await request.put<User>('/settings/update-user', {
    fullName,
    username,
  });

  return data;
};

interface PutPassword {
  (password: string): Promise<AxiosResponse<void | false>>;
}

export const putPassword: PutPassword = async (password) => {
  const data = await request.put('/settings/update-password', { password });

  return data;
};
