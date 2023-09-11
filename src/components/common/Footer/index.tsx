import React from 'react';
import {
  FooterButton,
  FooterContainer,
} from '~/components/common/Footer/FooterStyle';

interface FooterProps {
  content: string[];
}

const Footer = ({ content }: FooterProps) => {
  /* 페이지 이동 */
  const movePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${e.currentTarget.textContent} 페이지로 이동`);
  };

  return (
    <FooterContainer>
      {content.map((item, index) => (
        <FooterButton key={index} onClick={movePage}>
          {item}
        </FooterButton>
      ))}
    </FooterContainer>
  );
};

export default Footer;
