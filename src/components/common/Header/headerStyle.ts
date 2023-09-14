import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  width: 100%;
  //height: 100%;
  height: 50px;
  background: white;
`;

export const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

type SearchIconProps = {
  isHidden: boolean;
};

export const SearchIcon = styled.img<SearchIconProps>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  visibility: ${({ isHidden }) => (isHidden ? 'visible' : 'hidden')};
`;
