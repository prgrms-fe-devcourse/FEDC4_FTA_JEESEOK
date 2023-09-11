import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface EmotionProps {
  width: string;
  height: string;
  borderRadius: string;
  fontSize: string;
  scrollBarWidth: number;
  scrollBarThumbColor: string;
}

interface Props extends HTMLAttributes<HTMLTextAreaElement>, EmotionProps {
  text: string;
}

const TextareaComponent = styled('textarea')<EmotionProps>`
  resize: none;
  overflow: scroll;
  &:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: ${(props) => props.scrollBarWidth}px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.scrollBarThumbColor};
  }

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize};
`;

const Textarea = ({
  text,
  width,
  height,
  borderRadius,
  fontSize,
  scrollBarWidth = 1,
  scrollBarThumbColor = 'gray',
  ...props
}: Props) => {
  return (
    <TextareaComponent
      {...props}
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
