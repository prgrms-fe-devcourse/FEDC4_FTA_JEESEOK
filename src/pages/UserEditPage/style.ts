import styled from '@emotion/styled';

export const MainPageContainer = styled.main`
  margin-top: 50px;
  display: flex;
  gap: 15px;
  padding: 30px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 425px;
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
