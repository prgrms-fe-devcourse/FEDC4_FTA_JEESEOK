import { AxiosResponse } from 'axios';
import request from '~/api';
import { Comment } from '~/types';

interface postCommentRequest {
  comment: string;
  postId: string;
}

interface deleteCommentRequest {
  commentId: string;
}

interface PostComment {
  (commentRequest: postCommentRequest): Promise<AxiosResponse<Comment | false>>;
}

export const postComment: PostComment = async (commentRequest) => {
  const data = await request.post<Comment>('/comments/create', commentRequest);

  return data;
};

interface DeleteComment {
  (commentId: deleteCommentRequest): Promise<AxiosResponse<Comment | false>>;
}

export const deleteComment: DeleteComment = async (commentId) => {
  const result = await request.delete<Comment>('/comments/delete', {
    data: commentId,
  });

  return result;
};
