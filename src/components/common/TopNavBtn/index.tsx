import styled from '@emotion/styled';

interface topNavBtnProps {
  width?: number;
  height?: number;
  isActive?: boolean;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonWrapper = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(45deg, #FCCBF3, #E8CBF4, #B6CCF9, #72CDFF);'
      : '#D9E4FB'};
  background-size: cover;
  border: none;
  outline: none;
  flex-shrink: 0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8fbff;
  font-size: 23px;
  font-family: 'ONE-Mobile-Title';
  font-weight: 800;
  cursor: pointer;
  box-sizing: border-box;
`;

const TopNavBtn = ({
  width = 166,
  height = 48,
  title,
  isActive = false,
  onClick,
  ...props
}: topNavBtnProps) => {
  const btnStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <ButtonWrapper
      style={btnStyle}
      isActive={isActive}
      onClick={onClick}
      {...props}
    >
      {title}
    </ButtonWrapper>
  );
};

export default TopNavBtn;
