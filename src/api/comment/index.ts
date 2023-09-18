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
  (commentRequest: postCommentRequest): Promise<Comment | never>;
}

export const postComment: PostComment = async (commentRequest) => {
  const res = await request.post<Comment>('/comments/create', commentRequest);

  return res.data;
};

interface DeleteComment {
  (commentId: deleteCommentRequest): Promise<Comment | never>;
}

export const deleteComment: DeleteComment = async (commentId) => {
  const res = await request.delete<Comment>('/comments/delete', {
    data: commentId,
  });

  return res.data;
};
