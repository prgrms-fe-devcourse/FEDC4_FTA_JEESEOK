import { useNavigate } from 'react-router-dom';
import {
  BackButtonStyled,
  CloseButtonStyled,
  HeaderWrapper,
  Input,
  InputBox,
} from './HeaderStyle';
import backImg from './back.svg';
import cancelImga from './cancel.svg';

interface HeaderProps {
  word: string;
  setWord: (e: string) => void;
  setPostArr: (e: []) => void;
  setUserArr: (e: []) => void;
}

const Header = ({ word, setWord, setPostArr, setUserArr }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setWord('');
    setPostArr([]);
    setUserArr([]);
  };

  return (
    <HeaderWrapper>
      <BackButtonStyled onClick={() => navigate('/')}>
        <img src={backImg} />
      </BackButtonStyled>
      <InputBox>
        <Input
          placeholder="검색어를 입력하세요."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <CloseButtonStyled onClick={handleClick}>
          <img src={cancelImga} />
        </CloseButtonStyled>
      </InputBox>
    </HeaderWrapper>
  );
};

export default Header;
