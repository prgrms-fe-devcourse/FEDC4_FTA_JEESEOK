import React from 'react';
import {
  InputContainer,
  InputStyle,
  Text,
  Title,
} from '~/components/common/Input/InputStyles.ts';

interface InputProps {
  readonly id: string;
  readonly type?: string;
  isTitle?: boolean;
  title?: string;
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
  isTitle,
  title,
}: InputProps) => {
  return (
    <InputContainer id={id}>
      {isTitle && <Title>{title}</Title>}
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
