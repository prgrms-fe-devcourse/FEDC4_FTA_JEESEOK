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
  background-color: #f5f9ff;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
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
  margin-left: 5px;
  background-color: #d9e4fb;
`;
const Input = styled.input`
  background-color: transparent;
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 5px 10px;
  color: #8b9dc6;
  font-family: 'GangwonEdu_OTFBoldA';
`;
const CloseIconStyled = styled(Icon)`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  margin-right: 10px;
`;
const BackIconStyled = styled(Icon)`
  cursor: pointer;
  width: 15px;
  margin-left: 15px;
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
        strokeWidth={3}
      />
      <InputBox>
        <Input
          placeholder="검색어를 입력하세요."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <CloseIconStyled name="x" onClick={handleClick} strokeWidth={3} />
      </InputBox>
    </HeaderWrapper>
  );
};

export default Header;
