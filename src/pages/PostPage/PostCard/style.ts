import styled from '@emotion/styled';

export const PostCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding: 10px;
  background-color: #f5f9ff;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 14px;
  color: #494984;
  cursor: pointer;
`;

export const TagTitleCountArea = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const TagTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Tag = styled.div`
  flex-shrink: 0;
  padding: 3px 5px;
  border-radius: 15px;
  background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
  color: #f8fbff;
  font-family: 'ONE-Mobile-Title';
  font-size: 10px;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CountContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 3px;
  font-size: 10px;
`;

export const Like = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Comment = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DateUserArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const CreatedDate = styled.div``;

export const UserNameMbti = styled.div`
  display: flex;
  gap: 5px;
`;
