import request from '..';

const postLogoutApi = async (): Promise<string | false> => {
  try {
    const { data } = await request.post<string>('/logout');
    return data;
  } catch (error) {
    console.error('postLogoutApi', error);
    return false;
  }
};

export default postLogoutApi;
