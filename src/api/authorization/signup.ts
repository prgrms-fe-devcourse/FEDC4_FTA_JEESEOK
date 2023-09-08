import request from '~/api';
import { User } from '~/types';

interface ResponseUser {
  user: User;
  token: string;
}

interface SignupRequest {
  email: string;
  fullName: { mbti: string; intro: string };
  username: string;
  password: string;
}

const postSignupApi = async (
  signupInformation: SignupRequest
): Promise<ResponseUser | false> => {
  try {
    const { email, fullName, username, password } = signupInformation;

    const { data } = await request.post<ResponseUser>('/signup', {
      email,
      fullName: JSON.stringify(fullName),
      username,
      password,
    });
    return data;
  } catch (error) {
    console.error('postSignupApi', error);
    return false;
  }
};

export default postSignupApi;
