import { Post, User } from '~/types';
import request from '..';

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
  (query: string): Promise<SearchUserResponse[] | never>;
}

export const searchUser: SearchUser = async (query) => {
  const res = await request.get<SearchUserResponse[] | never>(
    `/search/users/${query}`
  );
  return res.data;
};

interface SearchAll {
  (query: string): Promise<(User | Post)[] | never>;
}

export const searchAll: SearchAll = async (query) => {
  const res = await request.get<(User | Post)[] | never>(
    `/search/all/${query}`
  );
  return res.data;
};
