import { Comment } from '~/types';
import {
  CommentContainer,
  Content,
  CreatedDate,
  Text,
  UserImage,
  UserName,
  UserNameDateArea,
} from './style';

type CommentCardProps = Pick<
  Comment,
  '_id' | 'comment' | 'author' | 'post' | 'createdAt'
>;

const CommentCard = ({
  _id,
  comment,
  author,
  post,
  createdAt,
}: CommentCardProps) => {
  return (
    <CommentContainer>
      <UserImage>{author.image}</UserImage>
      <Content>
        <UserNameDateArea>
          <UserName>{author.fullName}</UserName>
          <CreatedDate>{createdAt}</CreatedDate>
        </UserNameDateArea>
        <Text>{comment}</Text>
      </Content>
    </CommentContainer>
  );
};

export default CommentCard;
