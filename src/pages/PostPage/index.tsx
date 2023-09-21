import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import PostCardList from '~/components/post/PostCardList';
import { Post } from '~/types';
import TagList from './TagList';

const CHANNEL_ID = {
  JOB: '64f57dc874128417c268916c',
  LOVE: '64f57dd474128417c2689170',
  RELATIONSHIP: '64f96db08a4e9a3147d9117a',
  MONEY: '64f96d8e8a4e9a3147d91176',
} as const;

const TAG = 'tag';
const OFFSET = 0;
const LIMIT = 10;

type Tag = keyof typeof CHANNEL_ID | 'ALL' | null;

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const tag = searchParams.get(TAG)?.toUpperCase() as Tag;

      if (!tag || tag === 'ALL') {
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
        setLoading(false);

        return;
      }

      const posts = await getChannelPost(CHANNEL_ID[tag], OFFSET, LIMIT);

      if (posts) setPosts(posts);
      setLoading(false);
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
      {loading ? <Loading isLoading /> : <TagList onClick={handleTagClick} />}
      <PostCardList posts={posts} />
    </div>
  );
};

export default PostPage;
