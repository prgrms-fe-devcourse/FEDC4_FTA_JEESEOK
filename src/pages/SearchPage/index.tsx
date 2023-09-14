import { useState } from 'react';
import styled from '@emotion/styled';
import Content from '~/pages/SearchPage/Content';
import Header from '~/pages/SearchPage/Header';
import Nav from '~/pages/SearchPage/Nav';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SearchPage = () => {
  const [word, setWord] = useState('');

  return (
    <SearchWrapper>
      <Header word={word} setWord={setWord} />
      <Content word={word} />
      <Nav />
    </SearchWrapper>
  );
};

export default SearchPage;
