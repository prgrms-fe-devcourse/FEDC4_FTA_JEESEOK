import request from '~/api';

interface PostLogoutApi {
  (): Promise<string | false>;
}

const postLogoutApi: PostLogoutApi = async () => {
  const res = await request.post<string>('/logout');
  return res.data;
};

export default postLogoutApi;
