import request from '..';

const postLogoutApi = async (): Promise<string | boolean> => {
  try {
    const response = await request.post('/logout');
    return response.data;
  } catch (error) {
    console.error('postLogoutApi', error);
    return false;
  }
};

export default postLogoutApi;
