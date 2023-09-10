import styled from '@emotion/styled';
import { FeatherIconNames, icons } from 'feather-icons';

interface IconProps {
  name: FeatherIconNames;
  size?: number;
  rotate?: number;
  strokeWidth?: number;
  color?: string;
}

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  rotate,
  color = '#222',
  ...props
}: IconProps) => {
  const wrapperStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  const base64 = btoa(svg);

  return (
    <IconWrapper {...props} style={wrapperStyle}>
      <img src={`data:image/svg+xml;base64, ${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
