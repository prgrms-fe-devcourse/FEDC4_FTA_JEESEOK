import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import Spinner from '~/components/common/Spinner';
import PostCardList from '~/components/post/PostCardList';
import TagList from '~/components/post/TagList';
import { CHANNEL_ID } from '~/constants/channelId';
import { Post } from '~/types';
import { ObserverContainer } from './PostPageStyle';
import { getAllPosts } from './getAllPosts';

const TAG = 'tag';
const ALL_TAG = 'ALL';
const LIMIT = 15;

type Tag = keyof typeof CHANNEL_ID | 'ALL' | null;

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const observerRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTag = searchParams.get(TAG)?.toUpperCase() as Tag;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);

      if (!currentTag || currentTag === ALL_TAG) {
        const allPosts = await getAllPosts(CHANNEL_ID);
        setPosts([...allPosts]);
      } else {
        const channelPosts = await getChannelPost(
          CHANNEL_ID[currentTag],
          offset,
          LIMIT
        );
        setPosts([...posts, ...channelPosts]);
      }

      setLoading(false);
    };

    setTimeout(getPosts, 100);
  }, [searchParams, offset]);

  useEffect(() => {
    const observerEl = observerRef.current;
    if (!observerEl || posts.length < LIMIT || posts.length % LIMIT !== 0)
      return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOffset((prev) => prev + LIMIT);
          }
        }),
      {
        threshold: 1,
      }
    );

    observer.observe(observerEl);

    return () => {
      observer.unobserve(observerEl);
    };
  }, [observerRef, posts]);

  const handleTagClick = (tag: string) => {
    if (currentTag === tag.toUpperCase()) return;

    setOffset(0);
    setPosts([]);
    searchParams.set(TAG, tag);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header isSearch />
      <TagList activeTag={currentTag || undefined} onClick={handleTagClick} />
      <PostCardList posts={posts} />
      {loading && offset === 0 ? <Loading isLoading /> : null}
      <ObserverContainer ref={observerRef}>
        {!loading &&
          posts.length > 0 &&
          (!currentTag || currentTag === ALL_TAG ? (
            <span>최신순으로 최대 30개까지 제공됩니다.</span>
          ) : posts.length % LIMIT === 0 ? (
            <Spinner size={30} color={'#494984'} loading />
          ) : (
            <span>더 이상 게시글이 없습니다.</span>
          ))}
      </ObserverContainer>
    </>
  );
};

export default PostPage;
