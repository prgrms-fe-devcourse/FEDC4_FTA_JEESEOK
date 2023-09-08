import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

interface getAuthorizationCheck {
  (): Promise<AxiosResponse<User | false>>;
}

const getAuthorizationCheckApi: getAuthorizationCheck = async () => {
  const data = await request.get<User>('/auth-user');
  return data;
};

export default getAuthorizationCheckApi;
