import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCountArea = styled.div`
  width: 200px;
`;

export const Title = styled.div`
  font-size: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Count = styled.div`
  display: flex;
  gap: 15px;
`;

export const DateUserArea = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
