import React, { ReactNode } from 'react';
import { BaseButton } from './style';

export interface ButtonProps {
  children: ReactNode;
  className: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  fontSize: string | number;
  fontWeight: string | number;
  width: string | number;
  height: string | number;
  type: 'button' | 'submit' | 'reset' | undefined;
  form: string | undefined;
  onMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  isLoading = false,
  fontSize = '14px',
  fontWeight = '400',
  width = '40xp',
  height = '20px',
  type,
  form,
  onMouseDown,
  onMouseUp,
}: Partial<ButtonProps>) => {
  const preventOnClick = disabled || isLoading;

  return (
    <BaseButton
      className={className}
      disabled={disabled}
      onClick={preventOnClick ? undefined : onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      height={height}
      type={type}
      form={form}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
