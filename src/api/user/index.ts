import request from '~/api';
import { User } from '~/types';

interface GetUsers {
  (offset: number, limit: number): Promise<User[] | null>;
}

export const getUsers: GetUsers = async (offset = 0, limit = 10) => {
  try {
    const { data } = await request.get<User[]>('/users/get-users', {
      params: {
        offset,
        limit,
      },
    });

    return data;
  } catch (e) {
    console.error('getUsers', e);
    return null;
  }
};

interface GetUser {
  (userId: string): Promise<User | null>;
}

export const getUser: GetUser = async (userId) => {
  try {
    const { data } = await request.get<User>(`/users/${userId}`);

    return data;
  } catch (e) {
    console.error('getUser', e);
    return null;
  }
};

interface PostUserImage {
  (jwt: string, image: Blob): Promise<User | null>;
}

export const postUserImage: PostUserImage = async (jwt, image) => {
  try {
    const { data } = await request.post<User>(
      '/users/upload-photo',
      {
        isCover: false,
        image,
      },
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );

    return data;
  } catch (e) {
    console.error('postUserImage', e);
    return null;
  }
};

interface PostUserIntroduction {
  (jwt: string, image: string): Promise<User | null>;
}

export const postUserIntroduction: PostUserIntroduction = async (
  jwt,
  image
) => {
  try {
    const { data } = await request.post<User>(
      '/users/upload-photo',
      {
        isCover: true,
        image,
      },
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );

    return data;
  } catch (e) {
    console.error('postUserIntroduction', e);
    return null;
  }
};
