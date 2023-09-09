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

interface PostLike {
  (postId: postLikeRequest): Promise<AxiosResponse<likeResponse | undefined>>;
}

export const postLike: PostLike = async (postId) => {
  const data = await request.post<likeResponse>('/likes/create', postId);
  return data;
};

interface DeleteLike {
  (postId: deleteLikeRequest): Promise<AxiosResponse<likeResponse | undefined>>;
}

export const deleteLike: DeleteLike = async (postId) => {
  const data = await request.delete<likeResponse>('/likes/delete', {
    data: postId,
  });

  return data;
};
