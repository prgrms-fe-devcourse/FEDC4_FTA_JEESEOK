import { LogoImg, LogoImgContainer } from '~/components/common/Logo/LogoStyle';
import LogoSvg from '~/components/common/Logo/logo.svg';

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
