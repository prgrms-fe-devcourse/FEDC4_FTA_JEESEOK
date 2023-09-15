import { useState } from 'react';
import styled from '@emotion/styled';
import Content from '~/pages/SearchPage/Content';
import Header from '~/pages/SearchPage/Header';
import { Post, User } from '~/types';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SearchPage = () => {
  const [word, setWord] = useState('');
  const [postArr, setPostArr] = useState<Post[]>([]);
  const [userArr, setUserArr] = useState<User[]>([]);

  return (
    <SearchWrapper>
      <Header
        word={word}
        setWord={setWord}
        setPostArr={setPostArr}
        setUserArr={setUserArr}
      />
      <Content
        word={word}
        postArr={postArr}
        userArr={userArr}
        setPostArr={setPostArr}
        setUserArr={setUserArr}
      />
    </SearchWrapper>
  );
};

export default SearchPage;
