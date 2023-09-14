import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PostCard from '~/components/common/PostCard';
import { Post, User } from '~/types';
import Footer from '../Footer';
import { searchAll } from '../SearchAPI';
import UserCard from '../UserCardStyle';

interface ContentProps {
  word: string;
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

const Content = ({ word }: ContentProps) => {
  const [viewPost, setviewPost] = useState(true);
  const [postArr, setPostArr] = useState<Post[]>([]);
  const [userArr, setUserArr] = useState<User[]>([]);
  const topMenu = ['게시글', '유저'];

  useEffect(() => {
    if (word) {
      searchAll(`${word}`).then((appData) => {
        setPostArr(appData.filter((ele) => Object.hasOwn(ele, 'author')));
        setUserArr(appData.filter((ele) => Object.hasOwn(ele, 'fullName')));
        console.log(appData);
      });
    }
    console.log(postArr);
  }, [word]);

  const mbtiParsing = (string: string) => {
    const regex = /'mbti':\s*'([^"]+)'}/;
    const match = string.match(regex);
    return match === null ? '없음' : match[1];
  };
  const nickNameParsing = (string: string) => {
    const regex = /'nick[n|N]ame':\s*'([^"]+)',/;
    const match = string.match(regex);
    return match === null ? string : match[1];
  };
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
                  _id={post._id}
                  key={post._id}
                  title={post.title}
                  comments={post.comments}
                  likes={post.likes}
                  channel={post.channel}
                  author={post.author}
                  createdAt={post.createdAt}
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
                  nickname={nickNameParsing(user.fullName)}
                  mbti={mbtiParsing(user.fullName)}
                  key={user._id}
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
