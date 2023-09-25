import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  height: 70px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #f5f9ff;
  border-radius: 15px;
  color: #2f2f68;
`;

export const Text = styled.div`
  padding-left: 20px;
  flex-grow: 1;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'GangwonEdu_OTFBoldA';
`;

export const MbtiTag = styled.div`
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  font-family: 'MainFont';
`;

export const UserCardGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
