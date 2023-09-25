import request from '~/api';
import { User } from '~/types';

interface GetUsers {
  (offset: number, limit: number): Promise<User[] | never>;
}

export const getUsers: GetUsers = async (offset = 0, limit = 10) => {
  const res = await request.get<User[]>('/users/get-users', {
    params: {
      offset,
      limit,
    },
  });

  return res.data;
};

interface GetUser {
  (userId: string): Promise<User | never>;
}

export const getUser: GetUser = async (userId) => {
  const res = await request.get<User>(`/users/${userId}`);

  return res.data;
};

interface PostUserImage {
  (image: File): Promise<User | never>;
}

export const postUserImage: PostUserImage = async (image) => {
  const formData = new FormData();
  formData.append('isCover', 'false');
  formData.append('image', image);

  const res = await request.post<User>('/users/upload-photo', formData);

  return res.data;
};
