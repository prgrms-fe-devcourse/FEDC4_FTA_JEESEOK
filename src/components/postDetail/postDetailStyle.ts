import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  display: flex;
  //width: 404px;
  width: 100%;
  margin: 20px 0 10px;
  background-color: #f5f9ff;
  border-radius: 20px;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  max-width: 404px;
`;

export const ImgWrapper = styled.div`
  width: 60px;
  height: 37px;
  cursor: pointer;
`;

export const Img = styled.img``;

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
  margin: 0 10px 0 0;
  width: 100%;
`;

export const Category = styled.span``;

interface TextProps {
  fontSize?: string;
  fontFamily?: string;
  bold?: string;
  margin?: string;
  center?: boolean;
  color?: string;
  width?: string;
}

export const Text = styled.span<TextProps>`
  width: ${({ width }) => (width ? width : 'auto')};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.bold || 'normal'};
  margin: ${(props) => props.margin};
  text-align: ${({ center }) => (center ? 'center' : '')};
  color: ${({ color }) => (color ? color : '#000000')};
  font-family: 'GangwonEdu_OTFBoldA';
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const Tag = styled.div`
  height: 12px;
  width: 45px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  background: linear-gradient(
    33deg,
    #fccbf3 3.24%,
    #e8cbf4 25.67%,
    #b6ccf9 71.53%,
    #72cdff 126.79%
  );
  border-radius: 10px;
  color: #f8fbff;
  font-family: 'ONE-Mobile-Title';
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
