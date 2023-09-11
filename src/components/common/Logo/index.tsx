import LogoSvg from '~/assets/logo.svg';
import { LogoImg, LogoImgContainer } from '~/components/common/Logo/LogoStyle';

interface LogoProps {
  width: number;
}

const Logo = ({ width }: LogoProps) => {
  return (
    <LogoImgContainer width={width}>
      <LogoImg src={LogoSvg} alt="logo_icon" />
    </LogoImgContainer>
  );
};

export default Logo;
