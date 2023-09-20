import styled from '@emotion/styled';

export const EditPageContainer = styled.div`
  max-width: 425px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainPageContainer = styled.main`
  margin-top: 80px;
  display: flex;
  gap: 25px;
  padding: 30px;
  background-color: #f5f9ff;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 90%;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
`;

export const MbtiForm = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
`;
