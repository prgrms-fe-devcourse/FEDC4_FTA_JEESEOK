import { AxiosResponse } from 'axios';
import request from '~/api';

const postLogoutApi = async (): Promise<AxiosResponse<string | false>> => {
  const data = await request.post<string>('/logout');
  return data;
};

export default postLogoutApi;
