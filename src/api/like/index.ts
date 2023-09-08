import { AxiosResponse } from 'axios';
import request from '~/api';

interface postLikeRequest {
  postId: string;
}

interface deleteLikeRequest {
  likeId: string;
}

interface likeResponse {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export const postLike = async (
  postId: postLikeRequest
): Promise<AxiosResponse<likeResponse | undefined>> => {
  const data = await request.post<likeResponse>('/likes/create', postId);
  return data;
};

export const deleteLike = async (
  postId: deleteLikeRequest
): Promise<AxiosResponse<likeResponse | undefined>> => {
  const data = await request.delete<likeResponse>('/likes/delete', {
    data: postId,
  });
  return data;
};
