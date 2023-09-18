import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  display: flex;
  width: 404px;
  margin: 20px 0 10px;
  background-color: #f5f9ff;
  border-radius: 20px;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
`;

export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px 0px 10px;
  width: 100%;
`;

export const Category = styled.span``;

interface TextProps {
  fontSize?: string;
  fontFamily?: string;
  bold?: string;
  margin?: string;
}

export const Text = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.bold || 'normal'};
  margin: ${(props) => props.margin};
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const LikeImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
`;
