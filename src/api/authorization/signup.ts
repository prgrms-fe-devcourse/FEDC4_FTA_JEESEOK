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

interface PostSignupApi {
  (signupInformation: SignupRequest): Promise<ResponseUser | false>;
}

const postSignupApi: PostSignupApi = async (signupInformation) => {
  const { email, fullName, username, password } = signupInformation;

  const res = await request.post<ResponseUser>('/signup', {
    email,
    fullName: JSON.stringify(fullName),
    username,
    password,
  });
  return res.data;
};

export default postSignupApi;
