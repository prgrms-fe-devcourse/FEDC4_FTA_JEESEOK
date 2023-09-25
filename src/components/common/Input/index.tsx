import React from 'react';
import cancelBtnImg from '~/assets/cancel_button.svg';
import {
  CancelIcon,
  InputContainer,
  InputGroupContainer,
  InputStyle,
  Text,
  TopText,
} from '~/components/common/Input/InputStyles.ts';

export interface InputProps {
  readonly id: string;
  value: string;
  readonly placeHolder: string;
  width: string | number;
  height: string | number;
  readonly type?: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  validationText?: string;
  onClick?: () => void;
  border?: string;
  topText?: string;
  radius?: string;
  background?: string;
}

const Input = ({
  id,
  type,
  value,
  placeHolder,
  onChange,
  onKeyDown,
  disabled,
  validationText,
  isError,
  width,
  height,
  onClick,
  border,
  topText,
  radius,
  background,
}: InputProps) => {
  return (
    <InputContainer id={id} width={width}>
      {topText && <TopText>{topText}</TopText>}
      <InputGroupContainer
        height={height}
        border={border}
        radius={radius}
        background={background}
      >
        <InputStyle
          placeholder={placeHolder}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        {value.length > 0 && (
          <CancelIcon src={cancelBtnImg} onClick={onClick} />
        )}
      </InputGroupContainer>
      {isError && <Text>{validationText}</Text>}
    </InputContainer>
  );
};

export default Input;
