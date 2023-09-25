import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { searchAll } from '~/api/search';
import defaultProfile from '~/assets/default_profile.svg';
import Loading from '~/components/common/Loading';
import TopNavBtn from '~/components/common/TopNavBtn';
import PostCard from '~/components/post/PostCard';
import UserCard from '~/components/search/UserCard';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';
import {
  ContentWrapper,
  NoWordWrapper,
  PostCardGroup,
  TopNavWrapper,
  UserCardGroup,
} from './ContentStyle';

type SetPostCard = Dispatch<SetStateAction<Post[]>>;
type SetUserCard = Dispatch<SetStateAction<User[]>>;

interface ContentProps {
  word: string;
  postArr: Post[];
  userArr: User[];
  setPostArr: SetPostCard;
  setUserArr: SetUserCard;
}

const Content = ({
  word,
  postArr,
  userArr,
  setPostArr,
  setUserArr,
}: ContentProps) => {
  const [viewPost, setviewPost] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (word) {
      setIsLoading(true);

      timer = setTimeout(async () => {
        try {
          const res = await searchAll(`${word}`);

          if (res) {
            setPostArr(res.filter((post) => 'author' in post) as Post[]);
            setUserArr(res.filter((user) => 'username' in user) as User[]);
          }
        } finally {
          setIsLoading(false);
        }
      }, 300);
    } else {
      setPostArr([]);
      setUserArr([]);
    }

    return () => {
      if (timer !== null) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  const handleTapNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent === '게시글') setviewPost(true);
    else setviewPost(false);
  };

  return (
    <ContentWrapper>
      {word ? (
        <>
          {isLoading && <Loading isLoading={isLoading} />}
          <TopNavWrapper>
            <TopNavBtn
              title="게시글"
              isActive={viewPost}
              onClick={handleTapNav}
            />
            <TopNavBtn
              title="유저"
              isActive={!viewPost}
              onClick={handleTapNav}
            />
          </TopNavWrapper>
          {viewPost ? (
            <PostCardGroup>
              {postArr.map((post) => (
                <PostCard
                  id={post._id}
                  key={post._id}
                  title={JSON.parse(post.title).title}
                  commentsNumber={post.comments.length}
                  likesNumber={post.likes.length}
                  tag={post.channel.name}
                  username={post.author.username}
                  mbti=""
                  userImage={post.author.image}
                  createdAt={getKoreaTimeFromNow(post.createdAt)}
                />
              ))}
              {postArr.length === 0 && (
                <NoWordWrapper>검색결과가 없습니다.</NoWordWrapper>
              )}
            </PostCardGroup>
          ) : (
            <>
              <UserCardGroup imageSize={35} gap={5}>
                {userArr.map((user) => (
                  <UserCard
                    src={user.image ? user.image : defaultProfile}
                    nickname={user.username}
                    mbti={JSON.parse(user.fullName).mbti}
                    key={user._id}
                    id={user._id}
                    style={{ paddingLeft: '20px' }}
                  />
                ))}
              </UserCardGroup>
              {userArr.length === 0 && (
                <NoWordWrapper>검색결과가 없습니다.</NoWordWrapper>
              )}
            </>
          )}
        </>
      ) : (
        <NoWordWrapper>{'검색어를 입력해주세요!'}</NoWordWrapper>
      )}
    </ContentWrapper>
  );
};

export default Content;
