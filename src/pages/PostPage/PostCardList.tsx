import styled from '@emotion/styled';
import { Post } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';
import PostCard from './PostCard';

interface PostCardListProps {
  posts: Post[];
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
  gap: 10px;
  margin: 10px 10px 0 10px;
`;
