import { AxiosResponse } from 'axios';
import request from '~/api';

interface likeRequest {
  postId: string;
}

interface likeResponse {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export const postLike = async (postId: likeRequest): Promise<likeResponse> => {
  const result = await request.post<likeResponse>('/likes/create', postId);

  return result.data;
};
