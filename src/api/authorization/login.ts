import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

export interface ResponseUser {
  user: User;
  token: string;
}

interface LoginRequest {
  id: string;
  password: string;
}

interface PostLoginApi {
  (
    loginInformation: LoginRequest
  ): Promise<AxiosResponse<ResponseUser | false>>;
}

const postLoginApi: PostLoginApi = async (loginInformation) => {
  const { password, id } = loginInformation;
  const data = await request.post<ResponseUser>('/login', {
    email: id,
    password,
  });

  return data;
};

export default postLoginApi;
