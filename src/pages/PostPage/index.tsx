import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import Header from '~/components/common/Header';
import PostCardList from '~/components/post/PostCardList';
import { Post } from '~/types';
import TagList from './TagList';

const CHANNEL_ID = Object.freeze({
  love: '64f57dd474128417c2689170',
  relationship: '64f96db08a4e9a3147d9117a',
  job: '64f57dc874128417c268916c',
  money: '64f96d8e8a4e9a3147d91176',
});

const TAG = 'tag';
const OFFSET = 0;
const LIMIT = 10;

type Tag = keyof typeof CHANNEL_ID | 'all' | null;

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPosts = async () => {
      const tag = searchParams.get(TAG) as Tag;

      if (!tag || tag === 'all') {
        const allPosts = (
          await Promise.allSettled(
            Object.values(CHANNEL_ID).map((id) =>
              getChannelPost(id, OFFSET, LIMIT)
            )
          )
        )
          .filter(
            (result): result is PromiseFulfilledResult<Post[]> =>
              result.status === 'fulfilled'
          )
          .map((result) => result.value)
          .flat()
          .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

        setPosts(allPosts);

        return;
      }

      const posts = await getChannelPost(CHANNEL_ID[tag], OFFSET, LIMIT);

      if (posts) setPosts(posts);
    };

    setTimeout(getPosts, 100);
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    searchParams.set(TAG, tag);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Header isSearch />
      <TagList onClick={handleTagClick} />
      <PostCardList posts={posts} />
    </div>
  );
};

export default PostPage;
