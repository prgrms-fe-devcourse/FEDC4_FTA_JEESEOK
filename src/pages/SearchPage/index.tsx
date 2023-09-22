import { useState } from 'react';
import Content from '~/pages/SearchPage/Content';
import Header from '~/pages/SearchPage/Header';
import { Post, User } from '~/types';
import { SearchWrapper } from './SearchPageStyle';

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
