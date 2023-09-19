import styled from '@emotion/styled';

export const PostCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;

export const TitleCountArea = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CountContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const Like = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Comment = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DateUserArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
`;

export const CreatedDate = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;
