import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import search from '~/assets/search.svg';

export const HeaderContainer = styled.header`
  height: 50px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  background-color: white;
`;

export const LogoIcon = styled.img`
  width: 60px;
  height: 60px;
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
  width: 30px;
  height: 30px;
  cursor: pointer;
  visibility: ${({ isHidden }) => (isHidden ? 'visible' : 'hidden')};
`;

interface HeaderProps {
  isLogo: boolean;
  isSearch: boolean;
  title: string;
}

const Header = ({ isLogo = true, isSearch = false, title }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleSearchButtonClick = () => {
    navigate('/search');
  };

  return (
    <HeaderContainer>
      {isLogo && <LogoIcon src={logoImg} onClick={handleLogoClick} />}
      {!isLogo && (
        <BackIcon src={backButtonImg} onClick={handleBackButtonClick} />
      )}
      <span>{title}</span>
      <SearchIcon
        isHidden={isSearch}
        src={search}
        onClick={handleSearchButtonClick}
      ></SearchIcon>
    </HeaderContainer>
  );
};

export default Header;
