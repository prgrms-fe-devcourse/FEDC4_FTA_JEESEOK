import React from 'react';
import {
  FooterButton,
  FooterContainer,
} from '~/components/common/Footer/FooterStyle';

interface FooterProps {
  content: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

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
