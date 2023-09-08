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

export const searchUser = async (
  query: string
): Promise<SearchUserResponse[] | false> => {
  try {
    const { data } = await request.get<SearchUserResponse[] | false>(
      `/search/users/${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const searchAll = async (
  query: string
): Promise<(User | Post)[] | false> => {
  try {
    const { data } = await request.get<(User | Post)[] | false>(
      `/search/all/${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
