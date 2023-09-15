import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Icon from '~/components/common/Icon';

interface HeaderProps {
  word: string;
  setWord: (e: string) => void;
  setPostArr: (e: []) => void;
  setUserArr: (e: []) => void;
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 70%;
  box-sizing: border-box;
  border: 1px solid black;
  margin-right: 10px;
`;
const Input = styled.input`
  background-color: transparent;
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 5px;
`;
const CloseIconStyled = styled(Icon)`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
`;
const BackIconStyled = styled(Icon)`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
`;

const Header = ({ word, setWord, setPostArr, setUserArr }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setWord('');
    setPostArr([]);
    setUserArr([]);
  };

  return (
    <HeaderWrapper>
      <BackIconStyled
        name="chevron-left"
        size={30}
        onClick={() => navigate('/')}
      />
      <InputBox>
        <Input
          placeholder="검색어를 입력하세요."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <CloseIconStyled name="x" onClick={handleClick} />
      </InputBox>
    </HeaderWrapper>
  );
};

export default Header;
