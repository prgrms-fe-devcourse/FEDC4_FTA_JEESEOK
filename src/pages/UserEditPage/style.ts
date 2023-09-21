import styled from '@emotion/styled';

export const EditPageContainer = styled.div`
  max-width: 425px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const MainPageContainer = styled.main`
  margin-top: 160px;
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: #f5f9ff;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 90%;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImageButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: #fccbf3;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  background-color: #e4ecfe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MbtiIntroduceSpanContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 14px;
  color: #2f2f68;
`;

export const MbtiForm = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
`;

export const TextareaContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditPasswordButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;
