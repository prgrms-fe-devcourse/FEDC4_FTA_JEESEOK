import { useNavigate } from 'react-router-dom';
import backButtonImg from '~/assets/back_button.svg';
import logoImg from '~/assets/logo.svg';
import {
  BackIcon,
  HeaderContainer,
  LogoIcon,
} from '~/components/common/Header/headerStyle.ts';

interface HeaderProps {
  isLogo: boolean;
  title: string;
  onClick: () => Promise<void>;
}

const Header = ({ isLogo = true, title, onClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      {isLogo && <LogoIcon src={logoImg} onClick={handleLogoClick} />}
      {!isLogo && (
        <BackIcon src={backButtonImg} onClick={handleBackButtonClick} />
      )}
      <span>{title}</span>
      <button onClick={onClick} style={{ marginRight: '' }}>
        완료
      </button>
    </HeaderContainer>
  );
};

export default Header;
