import request from '~/api';
import { User } from '~/types';

interface PutMyInformation {
  (fullName: string, username: string): Promise<User | false>;
}

export const putMyInformation: PutMyInformation = async (
  fullName,
  username
) => {
  try {
    const { data } = await request.put<User>('/settings/update-user', {
      fullName,
      username,
    });

    return data;
  } catch (e) {
    console.error('putMyInformation', e);
    return false;
  }
};

interface PutPassword {
  (password: string): Promise<void | false>;
}

export const putPassword: PutPassword = async (password) => {
  try {
    await request.put('/settings/update-password', { password });
  } catch (e) {
    console.error('putPassword', e);
    return false;
  }
};
