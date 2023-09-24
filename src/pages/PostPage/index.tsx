import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import PostCardList from '~/components/post/PostCardList';
import TagList from '~/components/post/TagList';
import { CHANNEL_ID } from '~/constants/channelId';
import { Post } from '~/types';
import { getAllPosts } from './getAllPosts';

const TAG = 'tag';
const OFFSET = 0;
const LIMIT = 15;

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
        const allPosts = await getAllPosts(CHANNEL_ID, OFFSET, LIMIT);
        setPosts([...allPosts]);
      } else {
        const posts = await getChannelPost(CHANNEL_ID[tag], OFFSET, LIMIT);
        setPosts([...posts]);
      }

      setLoading(false);
    };

    setTimeout(getPosts, 100);
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    searchParams.set(TAG, tag);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header isSearch />
      <TagList onClick={handleTagClick} />
      {loading ? <Loading isLoading /> : <PostCardList posts={posts} />}
    </>
  );
};

export default PostPage;
