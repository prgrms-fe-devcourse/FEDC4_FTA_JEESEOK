import { useMemo, useState } from 'react';
import { deleteComment, postComment } from '~/api/comment';
import { postNotification } from '~/api/notification';
import CommentCard from '~/components/postDetail/CommentCard';
import CommentInput from '~/components/postDetail/CommentInput.tsx';
import {
  CommentContainer,
  CommentCount,
  CommentCountTitle,
  CommentCountWrapper,
  Text,
} from '~/components/postDetail/commentStyle.ts';
import {
  loginPlaceholder,
  nonLoginPlaceholder,
} from '~/constants/postDetail.ts';
import { Comment } from '~/types';
import { getDate } from '~/utils';

interface CommentsProps {
  comments: Comment[];
  postId: string;
  postUserId: string;
  userId: string;
  updateComment: () => void;
}

const Comments = ({
  comments,
  postId,
  postUserId,
  userId,
  updateComment,
}: CommentsProps) => {
  const [commentState, setCommentState] = useState('');

  const commentInputState = useMemo(() => {
    const disabled = !userId;
    const placeholder = userId ? loginPlaceholder : nonLoginPlaceholder;

    return {
      disabled,
      placeholder,
    };
  }, []);

  const sendComment = async () => {
    const COMMENT = 'COMMENT';
    if (!commentState) return;
    const data = await postComment({ postId, comment: commentState });
    if (data) {
      alert('댓글 작성이 완료되었습니다.');
      setCommentState('');
      await updateComment();

      await postNotification({
        notificationType: COMMENT,
        notificationTypeId: data._id,
        userId: postUserId,
        postId: postId,
      });
    }
  };

  const deleteMyComment = async (commentId: string) => {
    if (confirm('댓글을 정말 삭제하시겠습니까?')) {
      await deleteComment({ commentId });
      await updateComment();
    }
  };

  return (
    <CommentContainer>
      <CommentInput
        onChange={setCommentState}
        onClick={sendComment}
        value={commentState}
        isDisabled={commentInputState['disabled']}
        placeholder={commentInputState['placeholder']}
      />
      <CommentCountWrapper>
        <CommentCountTitle>댓글</CommentCountTitle>
        <CommentCount> {comments.length}</CommentCount>
      </CommentCountWrapper>

      {comments &&
        comments.map((comment, index) => (
          <CommentCard
            key={index}
            _id={comment._id}
            comment={comment.comment}
            author={comment.author}
            isLogin={comment.author._id === userId}
            createdAt={getDate(comment.createdAt)}
            onDeleteComment={deleteMyComment}
          ></CommentCard>
        ))}
      {!comments.length && <Text>댓글이 없습니다.</Text>}
    </CommentContainer>
  );
};

export default Comments;
