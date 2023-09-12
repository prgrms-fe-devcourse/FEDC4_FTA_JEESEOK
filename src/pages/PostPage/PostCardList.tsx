import { Post, User } from '~/types';
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
    <div>
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
            createdAt={createdAt.split('T')[0]}
          />
        )
      )}
    </div>
  );
};

export default PostCardList;
