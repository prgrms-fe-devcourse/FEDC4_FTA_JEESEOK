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
  (loginInformation: LoginRequest): Promise<ResponseUser | false>;
}

const postLoginApi: PostLoginApi = async (loginInformation) => {
  try {
    const { password, id } = loginInformation;
    const res = await request.post<ResponseUser>('/login', {
      email: id,
      password,
    });
    return res.data;
  } catch (error) {
    return false;
  }
};

export default postLoginApi;
