import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  handleCloseButtonClick: VoidFunction;
  handleConfirmButtonClick?: VoidFunction;
  children: React.ReactNode;
  footerShow?: boolean;
}

const Modal = ({
  handleCloseButtonClick,
  handleConfirmButtonClick,
  children,
  footerShow = true,
}: ModalProps) => {
  const modalRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (handleConfirmButtonClick && e.key === 'Enter') {
        e.preventDefault();
        handleConfirmButtonClick();
      }

      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault();
        handleCloseButtonClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleModalWrapperClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      handleCloseButtonClick();
    }
  };

  return (
    <ModalWrapper onClick={(e) => handleModalWrapperClick(e)} ref={modalRef}>
      <Container>
        <ModalContent>{children}</ModalContent>
        {footerShow && (
          <ModalFooter>
            <TextButton
              onClick={handleConfirmButtonClick || handleCloseButtonClick}
            >
              확인
            </TextButton>
            {handleConfirmButtonClick && (
              <TextButton onClick={handleCloseButtonClick}>취소</TextButton>
            )}
          </ModalFooter>
        )}
      </Container>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Container = styled.div`
  position: relative;
  background-color: #f5f9ff;
  width: 200px;
  height: fit-content;
  padding: 30px 20px 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 10px 11px 25px -9px rgba(199, 199, 199, 0.75);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TextButton = styled(Button)`
  font-size: 14px;
  font-family: 'ONE-Mobile-Title';
  color: #f8fbff;
  width: 55px;
  height: 30px;
  background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2f2f68;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 18px;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
