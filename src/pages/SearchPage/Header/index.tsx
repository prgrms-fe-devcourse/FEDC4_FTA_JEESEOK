import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import backImg from './back.svg';
import cancelImga from './cancel.svg';

interface HeaderProps {
  word: string;
  setWord: (e: string) => void;
  setPostArr: (e: []) => void;
  setUserArr: (e: []) => void;
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f9ff;
  border-radius: 0 0 50px 50px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 50%;
  box-sizing: border-box;
  border-radius: 30px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #d9e4fb;
`;

const Input = styled.input`
  background-color: transparent;
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 5px 15px;
  color: #8b9dc6;
  font-family: 'GangwonEdu_OTFBoldA';
`;

const BackButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 30px;
  margin-top: 3px;
  padding: 0;
  cursor: pointer;
`;

const CloseButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 15px;
  padding: 0;
  cursor: pointer;
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
