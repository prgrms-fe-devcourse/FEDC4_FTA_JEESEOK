import { LogoImg, LogoImgContainer } from '~/components/common/Logo/LogoStyle';
import LogoSvg from '~/components/common/Logo/logo.svg';
import { LogoProps } from '~/types/logo';

const Logo = ({ width }: LogoProps) => {
  return (
    <LogoImgContainer width={width}>
      <LogoImg src={LogoSvg} alt="logo_icon" />
    </LogoImgContainer>
  );
};

export default Logo;
