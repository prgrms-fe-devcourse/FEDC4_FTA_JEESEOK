import styled from '@emotion/styled';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';
import PostCard from './PostCard';

interface UserAddUsername extends User {
  username: string;
}

type Posts = (Omit<Post, 'author'> & { author: UserAddUsername })[];

interface PostCardListProps {
  posts: Posts;
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <PostCardListContainer>
      {posts.map(
        ({ _id, title, comments, likes, channel, author, createdAt }) => (
          <PostCard
            key={_id}
            id={_id}
            tag={channel.name}
            title={JSON.parse(title).title}
            likesNumber={likes.length}
            commentsNumber={comments.length}
            username={author.username}
            mbti={JSON.parse(author.fullName).mbti}
            createdAt={getKoreaTimeFromNow(createdAt)}
          />
        )
      )}
    </PostCardListContainer>
  );
};

export default PostCardList;

const PostCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 70px;
`;
