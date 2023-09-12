// styles.js
import styled from '@emotion/styled';
import { InputProps } from '~/components/common/Input/index.tsx';

type InputStylesProps = Pick<InputProps, 'width' | 'height'>;

export const InputContainer = styled.div<InputStylesProps>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #b2c0cc;
  box-sizing: border-box;
  &:focus-within {
    border: 1px solid #0c151c;
  }
  width: 100%;
  height: 100%;
`;

export const InputStyle = styled.input`
  width: 80%;
  &:focus {
    outline: none;
  }
  border: none;
`;

export const CancelIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const Text = styled.p`
  margin: 1px 0px 0px 2px;
  text-align: left;
  color: #f44336;
  font-size: 12px;
`;
