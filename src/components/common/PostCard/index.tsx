import { Post } from '~/types';
import { Container, Count, DateUserArea, Title, TitleCountArea } from './style';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Container>
      <TitleCountArea>
        <Title>{post?.title}</Title>
        <Count>
          <div>공감 {post?.likes.length}</div>
          <div>댓글 {post?.comments.length}</div>
        </Count>
      </TitleCountArea>
      <DateUserArea>
        <div>{post?.createdAt}</div>
        <div>{post?.author.fullName} mbti</div>
      </DateUserArea>
    </Container>
  );
};

export default PostCard;
