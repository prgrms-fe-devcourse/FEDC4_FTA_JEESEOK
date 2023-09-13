import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import search from '~/assets/search.svg';
import {
  BackIcon,
  ButtonIcon,
  HeaderContainer,
  LogoIcon,
  SearchIcon,
} from '~/pages/PostEditPage/Header/headerStyle.ts';

interface HeaderProps {
  isLogo: boolean;
  isSearch: boolean;
  title: string;
  isButton: boolean;
  buttonChildNode: ReactNode | undefined;
}

const Header = ({
  isLogo = true,
  isSearch = false,
  title,
  isButton = false,
  buttonChildNode,
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
      <ButtonIcon isHidden={isButton}>{buttonChildNode}</ButtonIcon>
    </HeaderContainer>
  );
};

export default Header;
