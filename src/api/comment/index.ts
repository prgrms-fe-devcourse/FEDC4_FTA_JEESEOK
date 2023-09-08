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

export const postComment = async (
  commentRequest: postCommentRequest
): Promise<AxiosResponse<Comment | false>> => {
  const data = await request.post<Comment>('/comments/create', commentRequest);
  return data;
};

export const deleteComment = async (
  commentId: deleteCommentRequest
): Promise<AxiosResponse<Comment | false>> => {
  const result = await request.delete<Comment>('/comments/delete', {
    data: commentId,
  });
  return result;
};
