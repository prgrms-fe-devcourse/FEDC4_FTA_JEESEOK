import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

interface TagStyleProps {
  width: string;
  height: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  fontSize: string;
}

interface TagProps extends HTMLAttributes<HTMLButtonElement>, TagStyleProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  isLoading: boolean;
}

const TagComponent = styled('button')<TagStyleProps>`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderWidth }) => borderWidth} solid
    ${({ borderColor }) => borderColor};
  font-size: ${({ fontSize }) => fontSize};
`;

const Tag = ({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  width,
  height,
  fontColor,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  fontSize,
  ...props
}: Partial<TagProps>) => {
  const preventOnClick = disabled || isLoading;

  return (
    <TagComponent
      {...props}
      onClick={preventOnClick ? undefined : onClick}
      width={width!}
      height={height!}
      fontColor={fontColor!}
      backgroundColor={backgroundColor!}
      borderRadius={borderRadius!}
      borderColor={borderColor!}
      borderWidth={borderWidth!}
      fontSize={fontSize!}
    >
      {children}
    </TagComponent>
  );
};

export default Tag;
