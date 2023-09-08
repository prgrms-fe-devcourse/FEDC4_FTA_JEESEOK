import request from '..';
import { USER } from './type';

const getAuthorizationChecktApi = async (): Promise<USER | boolean> => {
  try {
    const response = await request.get('/auth-user');
    return response.data;
  } catch (error) {
    console.error('getAuthorizationChecktApi', error);
    return false;
  }
};

export default getAuthorizationChecktApi;
