import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Icon from '~/components/common/Icon';

interface HeaderProps {
  word: string;
  setWord: (e: string) => void;
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
  margin-left: 10px;
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
const IconStyled = styled(Icon)`
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
`;
const ButtonStyled = styled(Button)`
  background-color: transparent;
  border: none;
  flex-grow: 1;
  display: block;
  text-align: center;
  height: 70%;
`;

const Header = ({ word, setWord }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <InputBox>
        <Input
          placeholder="검색어를 입력하세요."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <IconStyled name="x" onClick={() => setWord('')} />
      </InputBox>
      <ButtonStyled onClick={() => navigate('/')}>취소</ButtonStyled>
    </HeaderWrapper>
  );
};

export default Header;
