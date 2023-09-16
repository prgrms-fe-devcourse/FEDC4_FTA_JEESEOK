import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import { Post } from '~/types';
import PostCardList from './PostCardList';
import TagList from './TagList';

const CHANNEL_ID = Object.freeze({
  love: '64f57dd474128417c2689170',
  relationship: '64f96db08a4e9a3147d9117a',
  job: '64f57dc874128417c268916c',
  money: '64f96d8e8a4e9a3147d91176',
});

type Tag = keyof typeof CHANNEL_ID | 'all' | null;

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPosts = async () => {
      const tag = searchParams.get('tag') as Tag;

      if (!tag || tag === 'all') {
        const data = (
          await Promise.all(
            Object.values(CHANNEL_ID).map((id) => getChannelPost(id, 0, 10))
          )
        ).flat() as Post[];

        if (data) {
          setPosts(
            data.sort(
              (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
            )
          );
        }

        return;
      }

      const data = await getChannelPost(CHANNEL_ID[tag], 0, 20);

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
      <div style={{ height: '32px' }}></div>
      <PostCardList posts={posts} />
    </div>
  );
};

export default PostPage;
