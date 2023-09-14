import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { postLogoutApi } from '~/api/authorization';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import search from '~/assets/search.svg';

interface HeaderProps {
  isLogo: boolean;
  isSearch: boolean;
  isLogout: boolean;
  title: string;
}

const Header = ({
  isLogo = true,
  isSearch = false,
  isLogout = false,
  title = '',
}: Partial<HeaderProps>) => {
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

  const handleLogoutButtonClick = async () => {
    await postLogoutApi();
    navigate('/');
  };

  return (
    <HeaderContainer>
      {isLogo ? (
        <LogoIcon src={logoImg} onClick={handleLogoClick} />
      ) : (
        <BackIcon src={backButtonImg} onClick={handleBackButtonClick} />
      )}
      <span>{title}</span>
      <SearchIcon
        isHidden={isSearch}
        src={search}
        onClick={handleSearchButtonClick}
      />
      {isLogout && (
        <LogoutButton onClick={handleLogoutButtonClick}>로그아웃</LogoutButton>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  max-width: 425px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 777;
`;

const LogoIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;

type SearchIconProps = {
  isHidden: boolean;
};

const SearchIcon = styled.img<SearchIconProps>`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  visibility: ${({ isHidden }) => (isHidden ? 'visible' : 'hidden')};
`;

const LogoutButton = styled.button`
  border-radius: 20px;
  margin-right: 10px;
  background-color: white;
  cursor: pointer;
`;
