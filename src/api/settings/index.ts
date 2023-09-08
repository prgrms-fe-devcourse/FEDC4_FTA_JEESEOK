import request from '~/api';
import { User } from '~/types';

interface PutMyInformation {
  (jwt: string, fullName: string, username: string): Promise<User | null>;
}

export const putMyInformation: PutMyInformation = async (
  jwt,
  fullName,
  username
) => {
  try {
    const { data } = await request.put<User>(
      '/settings/update-user',
      {
        fullName,
        username,
      },
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );

    return data;
  } catch (e) {
    console.error('putMyInformation', e);
    return null;
  }
};

interface PutPassword {
  (jwt: string, password: string): Promise<void | null>;
}

export const putPassword: PutPassword = async (jwt, password) => {
  try {
    await request.put(
      '/settings/update-password',
      { password },
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
  } catch (e) {
    console.error('putPassword', e);
    return null;
  }
};
