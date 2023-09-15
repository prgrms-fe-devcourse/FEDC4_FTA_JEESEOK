import request from '~/api';
import { User } from '~/types';

interface GetAuthorizationCheck {
  (): Promise<User | false>;
}

const getAuthorizationCheckApi: GetAuthorizationCheck = async () => {
  const res = await request.get<User>('/auth-user');
  return res.data;
};

export default getAuthorizationCheckApi;
