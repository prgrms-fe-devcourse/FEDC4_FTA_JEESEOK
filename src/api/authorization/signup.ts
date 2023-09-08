import request from '..';
import { USER } from './type';

interface ResponseUser {
  user: USER;
  token: string;
}

const postSignupApi = async (
  email: string,
  fullName: string,
  password: string
): Promise<ResponseUser | boolean> => {
  try {
    const response = await request.post<ResponseUser>('/signup', {
      email: email,
      fullName: fullName,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('postSignupApi', error);
    return false;
  }
};

export default postSignupApi;
