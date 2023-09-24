import styled from '@emotion/styled';

export const TagListContainer = styled.div`
  display: flex;
  gap: 5px;
  position: fixed;
  margin: 9px 10px 5px 10px;
  z-index: 777;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 3px;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #e6efff;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
    border-radius: 5px;
  }
`;