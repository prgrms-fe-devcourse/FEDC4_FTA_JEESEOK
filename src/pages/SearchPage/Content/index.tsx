import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PostCard from '~/pages/PostPage/PostCard';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';
import Footer from '../Footer';
import { searchAll } from '../SearchAPI';
import UserCard from '../UserCardStyle';

interface ContentProps {
  word: string;
  postArr: Post[];
  userArr: User[];
  setPostArr: (e: Post[]) => void;
  setUserArr: (e: User[]) => void;
}

const ContentWrapper = styled.div`
  flex-grow: 1;
  background-color: aliceblue;
  overflow: hidden;
`;
const NoWordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PostCardGroup = styled.div`
  height: calc(100% - 10vh);
  overflow: scroll;
`;
const UserCardGroup = styled(UserCard.Group)`
  height: calc(100% - 10vh);
  overflow: scroll;
`;

const Content = ({
  word,
  postArr,
  userArr,
  setPostArr,
  setUserArr,
}: ContentProps) => {
  const [viewPost, setviewPost] = useState(true);
  const topMenu = ['게시글', '유저'];

  useEffect(() => {
    let timer = null;

    if (word) {
      timer = setTimeout(function () {
        searchAll(`${word}`).then((appData) => {
          setPostArr(appData.filter((ele) => Object.hasOwn(ele, 'author')));
          setUserArr(appData.filter((ele) => Object.hasOwn(ele, 'fullName')));
          console.log(appData);
        });
      }, 200);
    } else {
      setPostArr([]);
      setUserArr([]);
    }

    return () => clearTimeout(timer);
  }, [word]);

  const handleTapNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent === '게시글') setviewPost(true);
    else setviewPost(false);
  };

  return (
    <ContentWrapper>
      {word ? (
        <>
          <Footer content={topMenu} onClick={handleTapNav} />
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
                  username={post.author.fullName}
                  mbti=""
                  createdAt={getKoreaTimeFromNow(post.createdAt)}
                />
              ))}
              {postArr.length === 0 && (
                <NoWordWrapper>검색결과가 없습니다.</NoWordWrapper>
              )}
            </PostCardGroup>
          ) : (
            <UserCardGroup imageSize={50}>
              {userArr.map((user) => (
                <UserCard
                  src="https://picsum.photos/200?1"
                  nickname={user.username}
                  mbti={JSON.parse(user.fullName).mbti}
                  key={user._id}
                  id={user._id}
                />
              ))}
              {userArr.length === 0 && (
                <NoWordWrapper>검색결과가 없습니다.</NoWordWrapper>
              )}
            </UserCardGroup>
          )}
        </>
      ) : (
        <NoWordWrapper>{'검색어가 없습니다.'}</NoWordWrapper>
      )}
    </ContentWrapper>
  );
};

export default Content;
