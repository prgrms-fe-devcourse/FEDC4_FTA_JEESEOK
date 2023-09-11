import styled from '@emotion/styled';

interface LogoProps {
  width: number;
}

export const LogoImgContainer = styled.i<LogoProps>`
  width: ${(prop) => prop.width}px;
  cursor: pointer;
  display: inline-block;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
