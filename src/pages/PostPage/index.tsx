import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import { Post, User } from '~/types';
import PostCardList from './PostCardList';
import TagList from './TagList';

interface UserAddUsername extends User {
  username: string;
}

type Posts = (Omit<Post, 'author'> & { author: UserAddUsername })[];

const CHANNEL_ID = Object.freeze({
  love: '64f57dd474128417c2689170',
  relationship: '64f96db08a4e9a3147d9117a',
  job: '64f57dc874128417c268916c',
  money: '64f96d8e8a4e9a3147d91176',
});

const PostPage = () => {
  const [posts, setPosts] = useState<Posts>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPosts = async () => {
      const tag = searchParams.get('tag') as
        | 'all'
        | 'love'
        | 'relationship'
        | 'job'
        | 'money'
        | null;

      if (!tag || tag === 'all') {
        const data = (
          await Promise.all(
            Object.values(CHANNEL_ID).map((id) => getChannelPost(id, 0, 10))
          )
        ).flat() as unknown as Posts | undefined;

        if (data) {
          setPosts(
            data.sort(
              (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
            )
          );
        }

        return;
      }

      const data = (await getChannelPost(CHANNEL_ID[tag], 0, 20)) as unknown as
        | Posts
        | undefined;

      if (data) setPosts(data);
    };

    getPosts();
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    searchParams.set('tag', tag);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <TagList onClick={handleTagClick} />
      <div style={{ height: '27px' }}></div>
      <PostCardList posts={posts} />
    </div>
  );
};

export default PostPage;
