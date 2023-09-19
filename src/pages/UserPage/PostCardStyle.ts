import styled from '@emotion/styled';

export const PostCardContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background-color: #f5f9ff;
  padding: 12px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
`;

export const TitleCountArea = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
`;

export const DateUserArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const CreatedDate = styled.div`
  font-size: 14px;
`;
