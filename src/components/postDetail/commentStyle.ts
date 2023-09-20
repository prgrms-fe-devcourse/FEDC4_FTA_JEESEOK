import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 404px;
  border-radius: 20px;
  background: #f5f9ff;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  overflow-y: auto;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 367px;
  background: #e4ecfe;
  border-radius: 40px;
  margin-top: 10px;
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
  font-family: 'ONE-Mobile-Title';
  text-align: center;
  width: 100%;
  margin-bottom: 11px;
  margin-top: 11px;
`;

export const CommentCountTitle = styled.span`
  font-family: 'ONE-Mobile-Title';
  color: #2f2f68;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 5px;
`;

export const CommentCount = styled.span`
  font-family: 'ONE-Mobile-Title';
  color: #f9bbf0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 85%;
  margin-top: 10px;
`;
