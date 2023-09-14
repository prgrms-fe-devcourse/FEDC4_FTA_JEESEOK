import { useNavigate } from 'react-router-dom';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import search from '~/assets/search.svg';
import {
  BackIcon,
  HeaderContainer,
  LogoIcon,
  SearchIcon,
} from '~/components/common/Header/headerStyle.ts';

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
