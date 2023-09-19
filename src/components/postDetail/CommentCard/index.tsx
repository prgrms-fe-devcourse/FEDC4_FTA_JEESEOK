import { useNavigate } from 'react-router-dom';
import defaultProfile from '~/assets/default_profile.svg';
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
        {isLogin && <Cancel onClick={() => onDeleteComment(_id)}>삭제</Cancel>}
      </CommentMiddleContainer>
      <Underline />
    </CommentContainer>
  );
};

export default CommentCard;
