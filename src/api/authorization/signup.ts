import request from '..';
import { USER } from './type';

interface ResponseUser {
  user: USER;
  token: string;
}

interface SignupRequest {
  email: string;
  fullName: string;
  password: string;
}

const postSignupApi = async (
  signupInformation: SignupRequest
): Promise<ResponseUser | boolean> => {
  try {
    const response = await request.post<ResponseUser>('/signup', {
      email: signupInformation.email,
      fullName: signupInformation.fullName,
      password: signupInformation.password,
    });
    return response.data;
  } catch (error) {
    console.error('postSignupApi', error);
    return false;
  }
};

export default postSignupApi;
