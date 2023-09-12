import { CSSProperties } from 'react';
import styled from '@emotion/styled';

type shapeType = 'circle' | 'round' | 'square';
export type modeType = 'cover' | 'fill' | 'contain';

interface ShapeToCssValueType {
  circle: string;
  round: string;
  square: string;
}

interface ImageProps {
  shape?: shapeType;
  src: string;
  block?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  mode?: modeType;
  style?: CSSProperties;
}

const ShapeToCssValue: ShapeToCssValueType = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const ImageWrapper = styled.div<{ shape: shapeType }>`
  position: relative;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  overflow: hidden;
`;

const Image = ({
  shape = 'square',
  src,
  block = false,
  alt,
  width = 200,
  height = 200,
  mode = 'contain',
  ...props
}: ImageProps) => {
  const wrapperStyle = {
    display: block ? 'block' : 'inline-block',
    width,
    height,
  };
  const imageStyle = {
    display: block ? 'block' : 'undefined',
    width,
    height,
    objectFit: mode,
  };

  return (
    <ImageWrapper shape={shape} style={wrapperStyle}>
      <img src={src} alt={alt} style={{ ...props.style, ...imageStyle }} />
    </ImageWrapper>
  );
};

export default Image;
