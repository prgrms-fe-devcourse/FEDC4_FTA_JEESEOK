import { Post, User } from '~/types';
import request from '..';

export const searchUser = async (
  query: string
): Promise<User[] | undefined> => {
  try {
    return await request.get(`/search/users/${query}`);
  } catch (error) {
    console.error(error);
  }
};

export const searchAll = async (
  query: string
): Promise<(User | Post)[] | undefined> => {
  try {
    return await request.get(`/search/all/${query}`);
  } catch (error) {
    console.error(error);
  }
};
