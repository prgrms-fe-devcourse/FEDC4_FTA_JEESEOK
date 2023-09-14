import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import search from '~/assets/search.svg';

interface HeaderProps {
  isLogo: boolean;
  isSearch: boolean;
  title: string;
}

const Header = ({
  isLogo = true,
  isSearch = false,
  title,
  ...props
}: HeaderProps) => {
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
    <HeaderContainer {...props}>
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
