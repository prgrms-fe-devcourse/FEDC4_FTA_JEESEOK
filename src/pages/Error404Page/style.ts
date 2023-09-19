import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
`;

export const ContentText = styled.div`
  color: #2f2f68;
  font-family: 'MainFont';
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 777;
`;
