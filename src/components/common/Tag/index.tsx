import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface EmotionProps {
  width: string;
  height: string;
  fontColor: string;
  backgroundColor: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  fontSize: string;
}

interface Props extends HTMLAttributes<HTMLButtonElement>, EmotionProps {
  text: string;
}

const TagComponent = styled('button')<EmotionProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.borderWidth} solid ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize};
`;

const Tag = ({
  text,
  width,
  height,
  fontColor,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  fontSize,
  ...props
}: Props) => {
  return (
    <TagComponent
      {...props}
      width={width}
      height={height}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      fontSize={fontSize}
      onClick={() => alert(text)}
    >
      {text}
    </TagComponent>
  );
};

export default Tag;
