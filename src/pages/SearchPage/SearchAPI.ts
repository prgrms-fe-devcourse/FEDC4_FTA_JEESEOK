import { AxiosResponse } from 'axios';
import request from '~/api';
import { Post, User } from '~/types';

interface SearchUserResponse {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: [];
  likes: [];
  comments: [];
  followers: [];
  following: [];
  notifications: [];
  messages: [];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  username: string;
}

interface SearchUser {
  (query: string): Promise<AxiosResponse<SearchUserResponse[] | false>>;
}

export const searchUser: SearchUser = async (query) => {
  const data = await request.get<SearchUserResponse[] | false>(
    `/search/users/${query}`
  );
  return data;
};

// interface SearchAll {
//   (query: string): Promise<(User | Post)[] | false>;
// }
interface SearchAll {
  (query: string): Promise<AxiosResponse<(User | Post)[] | false>>;
}

export const searchAll: SearchAll = async (query) => {
  const data = await request.get<(User | Post)[] | false>(
    `/search/all/${query}`
  );
  // const { data } = await request.get<(User | Post)[] | false>(
  //   `/search/all/${query}`
  // );
  // {data} => data
  return data;
};