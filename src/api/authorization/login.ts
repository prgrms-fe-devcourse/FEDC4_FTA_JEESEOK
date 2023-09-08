import request from '..';
import { User } from '../../types';

interface ResponseUser {
  user: User;
  token: string;
}

interface LoginRequest {
  id: string;
  password: string;
}

const postLoginApi = async (
  loginInformation: LoginRequest
): Promise<ResponseUser | false> => {
  try {
    const { password } = loginInformation;

    const { data } = await request.post<ResponseUser>('/login', {
      email: loginInformation.id,
      password,
    });
    return data;
  } catch (error) {
    console.error('postLoginApi', error);
    return false;
  }
};

export default postLoginApi;
