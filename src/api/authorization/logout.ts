import { AxiosResponse } from 'axios';
import request from '~/api';

interface postLogoutApi {
  (): Promise<AxiosResponse<string | false>>;
}

const postLogoutApi: postLogoutApi = async () => {
  const data = await request.post<string>('/logout');
  return data;
};

export default postLogoutApi;
