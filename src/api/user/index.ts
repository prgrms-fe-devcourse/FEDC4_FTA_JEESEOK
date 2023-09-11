import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

interface GetUsers {
  (offset: number, limit: number): Promise<AxiosResponse<User[] | false>>;
}

export const getUsers: GetUsers = async (offset = 0, limit = 10) => {
  const data = await request.get<User[]>('/users/get-users', {
    params: {
      offset,
      limit,
    },
  });

  return data;
};

interface GetUser {
  (userId: string): Promise<AxiosResponse<User | false>>;
}

export const getUser: GetUser = async (userId) => {
  const data = await request.get<User>(`/users/${userId}`);

  return data;
};

interface PostUserImage {
  (image: File): Promise<AxiosResponse<User | false>>;
}

export const postUserImage: PostUserImage = async (image) => {
  const formData = new FormData();
  formData.append('isCover', 'false');
  formData.append('image', image);

  const data = await request.post<User>('/users/upload-photo', formData);

  return data;
};
