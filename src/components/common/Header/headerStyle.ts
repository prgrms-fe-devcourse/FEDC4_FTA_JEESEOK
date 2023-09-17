import styled from '@emotion/styled';
import Button from '../Button';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const LogoTitle = styled.div`
  font-family: 'MainFont';
  font-size: 30px;
  color: #2f2f68;
  font-weight: 700;
`;

export const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const MainTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type HiddenProps = {
  isHidden: boolean;
};

export const SearchIcon = styled.img<HiddenProps>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;
const ButtonStyled = styled(Button)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #2f2f68;
  font-weight: 700;
  font-size: 15px;
`;
export const LogoutButton = styled(ButtonStyled)<HiddenProps>`
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;
export const SaveButton = styled(ButtonStyled)<HiddenProps>`
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;
export const EditWrapper = styled.div<HiddenProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  display: ${({ isHidden }) => (isHidden ? 'flex' : 'none')};
`;
export const CorrectButton = styled(ButtonStyled)``;
export const DeleteButton = styled(ButtonStyled)``;
