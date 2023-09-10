import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
}

const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  isLoading,
}: Partial<ButtonProps>) => {
  const preventOnClick = disabled || isLoading;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={preventOnClick ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
