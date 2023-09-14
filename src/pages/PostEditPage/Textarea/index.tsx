import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface TextareaStyleProps {
  overFlow: string;
  width: string;
  height: string;
  borderRadius: string;
  fontSize: string;
  scrollBarWidth: number;
  scrollBarThumbColor: string;
}

interface TextareaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    TextareaStyleProps {
  value: string;
}

const TextareaComponent = styled('textarea')<TextareaStyleProps>`
  resize: none;
  overflow: ${({ overFlow }) => overFlow};
  &:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: ${({ scrollBarWidth }) => scrollBarWidth}px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ scrollBarThumbColor }) => scrollBarThumbColor};
  }

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
`;

const Textarea = ({
  value,
  overFlow,
  width,
  height,
  borderRadius,
  fontSize,
  scrollBarWidth = 1,
  scrollBarThumbColor = 'gray',
  ...props
}: TextareaProps) => {
  return (
    <TextareaComponent
      {...props}
      value={value}
      overFlow={overFlow}
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
      scrollBarWidth={scrollBarWidth}
      scrollBarThumbColor={scrollBarThumbColor}
    ></TextareaComponent>
  );
};

export default Textarea;
