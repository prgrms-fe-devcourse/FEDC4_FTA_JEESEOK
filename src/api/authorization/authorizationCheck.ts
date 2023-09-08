import request from '~/api';
import { User } from '~/types';

const getAuthorizationChecktApi = async (): Promise<User | false> => {
  try {
    const { data } = await request.get<User>('/auth-user');
    return data;
  } catch (error) {
    console.error('getAuthorizationChecktApi', error);
    return false;
  }
};

export default getAuthorizationChecktApi;
