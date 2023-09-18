import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
`;

export const UserImage = styled.img`
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
  word-break: break-all;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
