import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  padding: 10px;
`;

export const UserImage = styled.div`
  flex-shrink: 0;
  border: 1px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
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
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const CreatedDate = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Text = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
