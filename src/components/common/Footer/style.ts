import styled from '@emotion/styled';

export const CreateButton = styled.button`
  position: absolute;
  bottom: 90px;
  right: 20px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  max-width: 425px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 777;
  border-radius: 50px 50px 0 0;
  background-color: #f5f9ff;
`;

interface FooterButtonProps {
  width: string;
  height: string;
  backgroundColor: string;
}

export const FooterButton = styled.button<FooterButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;
