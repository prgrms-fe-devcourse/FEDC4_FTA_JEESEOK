import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface EmotionProps {
  width: string;
  height: string;
  borderRadius: string;
  fontSize: string;
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
  ...props
}: Props) => {
  return (
    <TextareaComponent
      {...props}
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {text}
    </TextareaComponent>
  );
};

export default Textarea;
