import { AxiosResponse } from 'axios';
import request from '~/api';
import { User } from '~/types';

const getAuthorizationCheckApi = async (): Promise<
  AxiosResponse<User | false>
> => {
  const data = await request.get<User>('/auth-user');
  return data;
};

export default getAuthorizationCheckApi;
