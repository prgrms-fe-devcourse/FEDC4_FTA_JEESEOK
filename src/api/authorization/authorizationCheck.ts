import request from '~/api';
import { User } from '~/types';

const getAuthorizationChecktApi = async (): Promise<User | false> => {
  const data = await request.get<User>('/auth-user');
  return data;
};

export default getAuthorizationChecktApi;
