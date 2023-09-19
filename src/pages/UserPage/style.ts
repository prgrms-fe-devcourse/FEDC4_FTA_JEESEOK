import styled from '@emotion/styled';

export const UserPageContainer = styled.div`
  max-width: 425px;
  min-width: 375px;
  height: 100vh;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  color: #2f2f68;
  font-family: 'GangwonEdu_OTFBoldA';
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div<{ isMyInfo: boolean }>`
  margin-top: 30px;
  display: flex;
  flex-direction: ${(props) => (props.isMyInfo ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 95%;
  height: ${(props) => (props.isMyInfo ? '' : '60vh')};
  background-color: #f5f9ff;
  border-radius: 20px;
  padding: ${(props) => (props.isMyInfo ? '15px' : '15px')};
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageNickNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 40%;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
`;

export const MbtiEditInfoButtonContainer = styled.div<{ isMyInfo: boolean }>`
  margin-bottom: ${(props) => (props.isMyInfo ? '-20px' : '17px')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const NickName = styled.span`
  font-size: 18px;
`;

export const MbtiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const MbtiImageContainer = styled.div`
  position: relative;
`;

export const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.div`
  width: 80%;
  height: 1px;
  border-radius: 1px;
  background-color: #bbcdf7;
`;

export const EditInfoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Mbti = styled.span<{ char: string; idx: number }>`
  font-size: ${(props) => (props.idx === 2 ? '45px' : '30px')};
  background: ${(props) =>
    props.idx === 2 && props.char === 'F'
      ? 'linear-gradient(45deg, #f2ccf4, #edcef4, #e1d6f5, #dddaf6)'
      : props.idx === 2 && props.char === 'T'
      ? 'linear-gradient(45deg, #CCDCF9, #CADCF9, #BFDCF9, #BCDCFA)'
      : ''};
  -webkit-background-clip: ${(props) => (props.idx === 2 ? 'text' : '')};
  background-clip: ${(props) => (props.idx === 2 ? 'text' : '')};
  color: ${(props) => (props.idx === 2 ? 'transparent' : '')};
  font-family: 'MainFont';
  display: inline-block;
`;

export const MyInfoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 50px;
`;

export const PostCardContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  max-width: 425px;
  min-width: 375px;
  height: 35%;
  box-sizing: border-box;
`;

export const NotExistPostContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotExistPost = styled.span`
  font-size: 20px;
`;

export const IntroduceAreaContainer = styled.div<{ isMyInfo: boolean }>`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f9ff;
  height: ${(props) => (props.isMyInfo ? '100%' : '100%')};
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0.2, 0.2, 1.5, 0.2);
`;

export const IntroduceArea = styled.div<{ isMyInfo: boolean }>`
  width: ${(props) => (props.isMyInfo ? '95%' : '100%')};
  height: ${(props) => (props.isMyInfo ? '95%' : '80%')};
  border-radius: 20px;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: #e4ecfe;
  text-align: center;
  font-size: 14px;
  overflow-y: auto;
`;
