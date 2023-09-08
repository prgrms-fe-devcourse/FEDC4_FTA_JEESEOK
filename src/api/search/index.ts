import { Post, User } from '~/types';
import request from '..';

export const searchUser = async (
  query: string
): Promise<User[] | undefined> => {
  try {
    const { data } = await request.get<User[] | undefined>(
      `/search/users/${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const searchAll = async (
  query: string
): Promise<(User | Post)[] | undefined> => {
  try {
    const { data } = await request.get<(User | Post)[] | undefined>(
      `/search/all/${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
