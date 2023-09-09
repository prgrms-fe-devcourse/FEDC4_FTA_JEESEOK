import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

interface GetAuthorizationCheck {
  (): Promise<AxiosResponse<User | false>>;
}

const getAuthorizationCheckApi: GetAuthorizationCheck = async () => {
  const data = await request.get<User>('/auth-user');
  return data;
};

export default getAuthorizationCheckApi;
