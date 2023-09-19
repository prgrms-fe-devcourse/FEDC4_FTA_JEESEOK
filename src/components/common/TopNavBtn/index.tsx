import styled from '@emotion/styled';

interface topNavBtnProps {
  width?: number;
  height?: number;
  isActive?: boolean;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonWrapper = styled.button<{ isActive: boolean }>`
  background-image: ${({ isActive }) =>
    isActive && "url('src/assets/top_nav_btn.svg')"};
  background-size: cover;
  border: none;
  outline: none;
  flex-shrink: 0;
  padding: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8fbff;
  font-size: 23px;
  font-family: 'ONE-Mobile-Title';
  font-weight: 800;
  background-color: ${({ isActive }) => isActive || '#D9E4FB'};
  cursor: pointer;
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
