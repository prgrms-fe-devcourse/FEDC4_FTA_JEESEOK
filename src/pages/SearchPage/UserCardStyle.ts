import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 5px 10px;
  height: 54px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Text = styled.div`
  padding-left: 20px;
  flex-grow: 1;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MbtiTag = styled.div`
  background-color: lightgray;
  font-size: 15px;
  padding: 5px;
  width: 40px;
  border-radius: 25%;
  flex-shrink: 0;
  text-align: center;
  box-sizing: border-box;
`;

export const UserCardGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
