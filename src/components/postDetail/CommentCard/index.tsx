import defaultUserImage from '~/assets/user.svg';
import { Comment } from '~/types';
import {
  CommentContainer,
  CommentWrap,
  Content,
  CreatedDate,
  Text,
  UserImage,
  UserName,
  UserNameDateArea,
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
  return (
    <CommentContainer>
      <UserImage
        src={author.image ? author.image : defaultUserImage}
      ></UserImage>
      <Content>
        <UserNameDateArea>
          <UserName>{author.username}</UserName>
          <CreatedDate>{createdAt}</CreatedDate>
        </UserNameDateArea>
        <CommentWrap>
          <Text>{comment}</Text>
          {isLogin && <Text onClick={() => onDeleteComment(_id)}>취소</Text>}
        </CommentWrap>
      </Content>
    </CommentContainer>
  );
};

export default CommentCard;
