import request from '~/api';
import { User } from '~/types';

interface GetAuthorizationCheck {
  (): Promise<User | never>;
}

const getAuthorizationCheckApi: GetAuthorizationCheck = async () => {
  const res = await request.get<User>('/auth-user');
  return res.data;
};

export default getAuthorizationCheckApi;
