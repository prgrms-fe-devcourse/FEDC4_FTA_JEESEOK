import { Post } from '~/types';
import {
  Comment,
  CountContainer,
  CreatedDate,
  DateUserArea,
  Like,
  PostCardContainer,
  Title,
  TitleCountArea,
  UserName,
} from './style';

type PostCardProps = Pick<
  Post,
  '_id' | 'title' | 'comments' | 'likes' | 'channel' | 'author' | 'createdAt'
>;

const PostCard = ({
  _id,
  title,
  comments,
  likes,
  channel,
  author,
  createdAt,
}: PostCardProps) => {
  return (
    <PostCardContainer>
      <TitleCountArea>
        <Title>{title}</Title>
        <CountContainer>
          <Like>공감 {likes.length}</Like>
          <Comment>댓글 {comments.length}</Comment>
        </CountContainer>
      </TitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
        <UserName>{author.fullName} mbti</UserName>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;
