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
  (postId: postLikeRequest): Promise<likeResponse | undefined>;
}

export const postLike: PostLike = async (postId) => {
  const res = await request.post<likeResponse>('/likes/create', postId);
  return res.data;
};

interface DeleteLike {
  (postId: deleteLikeRequest): Promise<likeResponse | undefined>;
}

export const deleteLike: DeleteLike = async (postId) => {
  const res = await request.delete<likeResponse>('/likes/delete', {
    data: postId,
  });

  return res.data;
};
