import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { searchAll } from '~/api/search';
import Loading from '~/components/common/Loading';
import TopNavBtn from '~/components/common/TopNavBtn';
import PostCard from '~/components/post/PostCard';
import UserCard from '~/components/search/UserCard';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';

interface ContentProps {
  word: string;
  postArr: Post[];
  userArr: User[];
  setPostArr: (value: Post[]) => void;
  setUserArr: (value: User[]) => void;
}

const ContentWrapper = styled.div`
  flex-grow: 1;
  background-color: #e6efff;
  overflow: hidden;
  position: relative;
`;
const TopNavWrapper = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 30px;
  margin-bottom: 10px;
  gap: 10px;
`;
const NoWordWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 230px;
  transform: translate(-50%, -50%);
  font-family: 'ONE-Mobile-Title';
  color: #2f2f68;
  font-size: 22px;
  text-align: center;
`;
const PostCardGroup = styled.div`
  height: calc(100% - 88px);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 95%;
  margin: 0 auto;
`;
const UserCardGroup = styled(UserCard.Group)`
  height: calc(100% - 88px);
  overflow: scroll;
  width: 95%;
  margin: 0 auto;
`;

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
                    src={
                      user.image ? user.image : 'src/assets/default_profile.svg'
                    }
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
