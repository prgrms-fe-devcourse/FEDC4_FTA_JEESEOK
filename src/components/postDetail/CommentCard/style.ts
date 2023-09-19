import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 100%;
  margin-top: 11px;
  margin-bottom: 11px;
`;

export const CommentTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentMiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 4px;
  margin-bottom: 7px;
`;

export const UserImage = styled.img`
  flex-shrink: 0;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  cursor: pointer;
  margin-right: 7px;
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const UserNameDateArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.div`
  cursor: pointer;
  color: #2f2f68;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const CreatedDate = styled.div`
  color: #2f2f68;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: right;
`;

export const Text = styled.div`
  overflow: hidden;
  word-break: break-all;
`;

export const Cancel = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: right;
  width: 15%;
  color: #93a6c9;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentContent = styled.div`
  margin-left: 15px;
  width: 85%;
  word-break: break-all;
  white-space: normal;
  color: #2f2f68;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Vertical = styled.div`
  color: #bbcdf7;
  font-size: 14px;
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
`;

export const Mbti = styled.div`
  color: #2f2f68;
  font-family: 'main';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Underline = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #bbcdf7;
`;
