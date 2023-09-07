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
): Promise<Comment | undefined> => {
  try {
    const result = await request.post<Comment>(
      '/comments/create',
      commentRequest
    );
    return result.data;
  } catch (error: unknown) {
    return undefined;
  }
};

export const deleteComment = async (
  commentId: deleteCommentRequest
): Promise<Comment | undefined> => {
  try {
    const result = await request.delete<Comment>('/comments/delete', {
      data: commentId,
    });
    return result.data;
  } catch (error: unknown) {
    return undefined;
  }
};
