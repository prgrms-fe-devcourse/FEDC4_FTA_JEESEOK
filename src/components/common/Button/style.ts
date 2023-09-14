import styled from '@emotion/styled';
import { ButtonProps } from '.';

type BaseButtonStyleType = Pick<
  ButtonProps,
  'fontSize' | 'fontWeight' | 'width' | 'height'
>;

export const BaseButton = styled.button<BaseButtonStyleType>`
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
  font-weight: ${({ fontWeight }) =>
    typeof fontWeight === 'number' ? `${fontWeight}px` : fontWeight};
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  cursor: pointer;
  justify-content: center;
`;
