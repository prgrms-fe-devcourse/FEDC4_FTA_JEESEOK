import React, { CSSProperties, ReactNode } from 'react';
import { BaseButton } from '~/components/common/Button/style';

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
  style: CSSProperties;
}

const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  isLoading = false,
  fontSize = '14px',
  fontWeight = '400',
  width = '40px',
  height = '20px',
  style = {},
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
      style={style}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
