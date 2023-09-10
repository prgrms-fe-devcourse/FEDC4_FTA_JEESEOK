import { Comment } from '~/types';
import {
  Container,
  Content,
  Text,
  UserImage,
  UserName,
  UserNameDateArea,
} from './style';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Container>
      <UserImage>{comment.author.image}</UserImage>
      <Content>
        <UserNameDateArea>
          <UserName>{comment.author.fullName}</UserName>
          <div>{comment.createdAt}</div>
        </UserNameDateArea>
        <Text>{comment.comment}</Text>
      </Content>
    </Container>
  );
};

export default CommentCard;
