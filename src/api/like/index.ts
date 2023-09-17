import request from '~/api';
import { Like } from '~/types';

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
  (postId: postLikeRequest): Promise<likeResponse>;
}

export const postLike: PostLike = async (postId) => {
  const res = await request.post<likeResponse>('/likes/create', postId);
  return res.data;
};

interface DeleteLike {
  (id: deleteLikeRequest): Promise<Like>;
}

export const deleteLike: DeleteLike = async ({ likeId }) => {
  const res = await request.delete<likeResponse>('/likes/delete', {
    data: { id: likeId },
  });

  return res.data;
};
