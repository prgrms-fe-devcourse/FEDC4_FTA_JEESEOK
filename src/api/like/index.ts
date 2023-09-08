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
): Promise<likeResponse | undefined> => {
  try {
    const result = await request.post<likeResponse>('/likes/create', postId);
    return result.data;
  } catch (e: unknown) {
    return undefined;
  }
};

export const deleteLike = async (
  postId: deleteLikeRequest
): Promise<likeResponse | undefined> => {
  try {
    const result = await request.delete<likeResponse>('/likes/delete', {
      data: postId,
    });
    return result.data;
  } catch (e: unknown) {
    return undefined;
  }
};
