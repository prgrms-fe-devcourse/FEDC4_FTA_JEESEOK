import React from 'react';
import {
  InputContainer,
  InputStyle,
  Text,
} from '~/components/common/Input/InputStyles.ts';

interface InputProps {
  readonly id: string;
  readonly type?: string;
  value: string;
  readonly placeHolder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled: boolean;
  validationText?: string;
  isError?: boolean;
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
}: InputProps) => {
  value = '';
  return (
    <InputContainer id={id}>
      <InputStyle
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      {isError && <Text>{validationText}</Text>}
    </InputContainer>
  );
};

export default Input;
