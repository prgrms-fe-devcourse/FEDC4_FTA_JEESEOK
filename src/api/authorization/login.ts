import request from '..';
import { USER } from './type';

interface ResponseUser {
  user: USER;
  token: string;
}

const postLoginApi = async (
  id: string,
  password: string
): Promise<ResponseUser | boolean> => {
  try {
    const response = await request.post<ResponseUser>('/login', {
      email: id,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('postLoginApi', error);
    return false;
  }
};

export default postLoginApi;
