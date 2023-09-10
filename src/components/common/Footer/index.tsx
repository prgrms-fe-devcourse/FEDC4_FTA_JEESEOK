import {
  FooterButton,
  FooterContainer,
} from '~/components/common/Footer/FooterStyle';
import { FooterProps } from '~/types/footer';

const Footer = ({ content, onClick }: FooterProps) => {
  return (
    <FooterContainer>
      {content.map((item, index) => (
        <FooterButton key={index} onClick={onClick}>
          {item}
        </FooterButton>
      ))}
    </FooterContainer>
  );
};

export default Footer;
