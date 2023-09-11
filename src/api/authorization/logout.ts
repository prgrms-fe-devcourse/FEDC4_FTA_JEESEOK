import { AxiosResponse } from 'axios';
import request from '~/api';

interface PostLogoutApi {
  (): Promise<AxiosResponse<string | false>>;
}

const postLogoutApi: PostLogoutApi = async () => {
  const data = await request.post<string>('/logout');
  return data;
};

export default postLogoutApi;
