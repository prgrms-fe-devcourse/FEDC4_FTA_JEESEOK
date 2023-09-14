import React from 'react';
import styled from '@emotion/styled';

interface FooterProps {
  content: string[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Footer = ({ content, onClick, ...props }: FooterProps) => {
  return (
    <FooterContainer {...props}>
      {content.map((item, index) => (
        <FooterButton key={index} onClick={onClick}>
          {item}
        </FooterButton>
      ))}
    </FooterContainer>
  );
};

export const FooterContainer = styled.div`
  min-width: 320px;
  max-width: 425px;
  height: 8vh;
  display: flex;
  //position: fixed;
  //left: 0;
  //bottom: 0;
  width: 100%;
  z-index: 777;
`;

export const FooterButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: 1px solid;
  background-color: white;
`;

export default Footer;
