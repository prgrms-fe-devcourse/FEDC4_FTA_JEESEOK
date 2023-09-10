import styled from '@emotion/styled';
import { LogoProps } from '~/types/logo';

export const LogoImgContainer = styled.i<LogoProps>`
  width: ${(prop) => prop.width}px;
  cursor: pointer;
  display: inline-block;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
