import request from '~/api';
import { User } from '~/types';

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
  const { password, id } = loginInformation;
  const { data } = await request.post<ResponseUser>('/login', {
    email: id,
    password,
  });

  return data;
};

export default postLoginApi;
