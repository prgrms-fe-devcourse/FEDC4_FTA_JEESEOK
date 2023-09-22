import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '~/assets/default_profile.svg';
import Modal from '~/components/common/Modal';
import { Comment } from '~/types';
import {
  Cancel,
  CommentContainer,
  CommentContent,
  CommentMiddleContainer,
  CommentTopContainer,
  CreatedDate,
  Mbti,
  Underline,
  UserImage,
  UserInfoWrapper,
  UserName,
  Vertical,
} from './style';

interface CommentCard extends Comment {
  isLogin: boolean;
  onDeleteComment: (commentId: string) => void;
}

type CommentCardProps = Pick<
  CommentCard,
  '_id' | 'comment' | 'author' | 'createdAt' | 'isLogin' | 'onDeleteComment'
>;

const CommentCard = ({
  _id,
  comment,
  author,
  createdAt,
  isLogin,
  onDeleteComment,
}: CommentCardProps) => {
  const mbti = JSON.parse(author.fullName)['mbti'];
  const navigate = useNavigate();
  const moveUserPage = () => {
    navigate(`/user/${author?._id}`);
  };
  const [modalState, setModalState] = useState(false);

  const handleConfirmButtonClick = () => {
    onDeleteComment(_id);
    setModalState(false);
  };

  return (
    <CommentContainer>
      <CommentTopContainer>
        <UserImage
          src={author.image ? author.image : defaultProfile}
          onClick={moveUserPage}
        ></UserImage>
        <UserInfoWrapper>
          <UserName onClick={moveUserPage}>{author.username}</UserName>
          <Vertical>|</Vertical>
          <Mbti>{mbti}</Mbti>
        </UserInfoWrapper>
        <CreatedDate>{createdAt}</CreatedDate>
      </CommentTopContainer>
      <CommentMiddleContainer>
        <CommentContent>{comment}</CommentContent>
        {isLogin && <Cancel onClick={() => setModalState(true)}>삭제</Cancel>}
      </CommentMiddleContainer>
      <Underline />
      {modalState && (
        <Modal
          handleConfirmButtonClick={handleConfirmButtonClick}
          handleCloseButtonClick={() => setModalState(false)}
        >
          댓글을 정말 삭제하시겠습니까?
        </Modal>
      )}
    </CommentContainer>
  );
};

export default CommentCard;
