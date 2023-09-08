import request from '..';
import { USER } from './type';

interface ResponseUser {
  user: USER;
  token: string;
}

interface LoginRequest {
  id: string;
  password: string;
}

const postLoginApi = async (
  loginInformation: LoginRequest
): Promise<ResponseUser | boolean> => {
  try {
    const response = await request.post<ResponseUser>('/login', {
      email: loginInformation.id,
      password: loginInformation.password,
    });
    return response.data;
  } catch (error) {
    console.error('postLoginApi', error);
    return false;
  }
};

export default postLoginApi;
