import { LogoContainer, LogoImg } from '~/components/common/Logo/LogoStyle';
import LogoSvg from '~/components/common/Logo/logo.svg';
import { LogoProps } from '~/types/logo';

const Logo = ({ width }: LogoProps) => {
  return (
    <LogoContainer width={width}>
      <LogoImg src={LogoSvg} alt="logo_icon" />
    </LogoContainer>
  );
};

export default Logo;
