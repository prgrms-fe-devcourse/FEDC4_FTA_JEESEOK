import request from '..';
import { USER } from './type';

const getAuthorizationChecktApi = async (): Promise<USER | false> => {
  try {
    const { data } = await request.get<USER>('/auth-user');
    return data;
  } catch (error) {
    console.error('getAuthorizationChecktApi', error);
    return false;
  }
};

export default getAuthorizationChecktApi;
