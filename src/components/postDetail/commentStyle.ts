import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 369px;
  background: #f5f9ff;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 332px;
  background: #e4ecfe;
  border-radius: 40px;
`;

export const CommentInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  margin-left: 15px;
  padding: 5px 0 5px;
`;

export const CommentInputStyle = styled.textarea`
  justify-content: center;
  align-items: center;
  resize: none;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  overflow: hidden;
  width: 100%;
  line-height: 100%;
  font-size: 15px;
`;

export const CommentButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 15%;
  height: 100%;
`;

export const CommentButton = styled.img`
  cursor: pointer;
  height: 12px;
`;

export const Text = styled.div`
  text-align: left;
  width: 100%;
`;
