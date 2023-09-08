import request from '~/api';
import { User } from '~/types';

interface GetUsers {
  (offset: number, limit: number): Promise<User[] | false>;
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
    return false;
  }
};

interface GetUser {
  (userId: string): Promise<User | false>;
}

export const getUser: GetUser = async (userId) => {
  try {
    const { data } = await request.get<User>(`/users/${userId}`);

    return data;
  } catch (e) {
    console.error('getUser', e);
    return false;
  }
};

interface PostUserImage {
  (image: File): Promise<User | false>;
}

export const postUserImage: PostUserImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append('isCover', 'false');
    formData.append('image', image);

    const { data } = await request.post<User>('/users/upload-photo', formData);

    return data;
  } catch (e) {
    console.error('postUserImage', e);
    return false;
  }
};
