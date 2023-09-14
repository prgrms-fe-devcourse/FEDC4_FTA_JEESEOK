import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface TextareaStyleProps {
  value: string;
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
  text: string;
}

const TextareaComponent = styled('textarea')<TextareaStyleProps>`
  resize: none;
  overflow: scroll;
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
  text,
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
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
      scrollBarWidth={scrollBarWidth}
      scrollBarThumbColor={scrollBarThumbColor}
    >
      {text}
    </TextareaComponent>
  );
};

export default Textarea;
