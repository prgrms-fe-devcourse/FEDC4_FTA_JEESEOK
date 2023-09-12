import React from 'react';
import cancelBtnImg from '~/assets/cancel_button.svg';
import {
  CancelIcon,
  InputContainer,
  InputGroupContainer,
  InputStyle,
  Text,
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
}: InputProps) => {
  return (
    <InputContainer id={id} width={width} height={height}>
      <InputGroupContainer>
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
