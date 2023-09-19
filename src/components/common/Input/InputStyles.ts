// styles.js
import styled from '@emotion/styled';
import { InputProps } from '~/components/common/Input/index.tsx';

type InputStylesProps = Pick<InputProps, 'width'>;
type InputGroupContainerProps = Pick<
  InputProps,
  'height' | 'border' | 'radius' | 'background'
>;

export const InputContainer = styled.div<InputStylesProps>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  margin-bottom: 10px;
  margin-top: 5px;
  position: relative;
`;

export const InputGroupContainer = styled.div<InputGroupContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({ border }) => (border ? border : '1px solid #b2c0cc')};
  box-sizing: border-box;
  width: 100%;
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  border-radius: ${({ radius }) => (radius ? radius : '0px')};
  background: ${({ background }) => (background ? background : '#f5f9ff')};
`;

export const InputStyle = styled.input`
  width: 80%;
  &:focus {
    outline: none;
  }
  border: none;
  background-color: transparent;
  color: #2f2f68;
  font-size: 14px;
  font-family: 'GangwonEdu_OTFBoldA';
  &::placeholder {
    color: #8b9dc6;
  }
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
  font-family: 'GangwonEdu_OTFBoldA';
`;

export const TopText = styled.div`
  position: absolute;
  background: #f5f9ff;
  z-index: 100;
  color: #bbcdf7;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 14px;
  top: -4px;
  left: 25px;
  margin: 0px 1px 0px 1px;
  font-weight: 400;
  width: 60px;
  text-align: center;
`;
