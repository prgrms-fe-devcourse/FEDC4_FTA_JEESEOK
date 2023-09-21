import styled from '@emotion/styled';
import Button from '../Button';

export const HeaderContainer = styled.header`
  font-family: 'ONE-Mobile-Title';
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2f2f68;
  background-color: #f5f9ff;
  position: fixed;
  top: 0;
  max-width: 425px;
  width: 100%;
  height: 60px;
  border-radius: 0 0 50px 50px;
  z-index: 1000;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 30px;
  cursor: pointer;
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 24px;
`;

export const LogoTitle = styled.div`
  font-family: 'MainFont';
  font-size: 22px;
  color: #2f2f68;
  font-weight: 700;
`;

export const BackIcon = styled.img`
  width: 10px;
  height: 15px;
  margin-left: 30px;
  cursor: pointer;
`;

export const MainTitle = styled.div`
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

type HiddenProps = {
  isHidden: boolean;
};

export const SearchIcon = styled.img<HiddenProps>`
  width: 22px;
  height: 22px;
  margin-right: 40px;
  cursor: pointer;
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;

const ButtonStyled = styled(Button)`
  border: none;
  outline: none;
  background-color: transparent;
  color: #2f2f68;
  font-family: 'ONE-Mobile-Title';
  font-weight: 400;
  font-size: 15px;
  white-space: nowrap;
  cursor: pointer;
`;

export const LogoutButton = styled(ButtonStyled)<HiddenProps>`
  margin-right: 25px;
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;

export const SaveButton = styled(ButtonStyled)<HiddenProps>`
  margin-right: 25px;
  display: ${({ isHidden }) => (isHidden ? 'block' : 'none')};
`;

export const EditWrapper = styled.div<HiddenProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 25px;
  display: ${({ isHidden }) => (isHidden ? 'flex' : 'none')};
`;

export const CorrectButton = styled(ButtonStyled)``;

export const Separator = styled.div`
  width: 1px;
  height: 15px;
  border-radius: 1px;
  background-color: #bbcdf7;
`;

export const DeleteButton = styled(ButtonStyled)``;
