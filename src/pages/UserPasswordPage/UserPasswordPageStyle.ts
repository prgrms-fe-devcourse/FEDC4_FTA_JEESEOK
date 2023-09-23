import styled from '@emotion/styled';
import Button from '~/components/common/Button';

export const UserPasswordPageWrapper = styled.div`
  width: 100%;
  min-width: 220px;
`;

export const UserPasswordPageMainWrapper = styled.div`
  background-color: #f5f9ff;
  width: calc(100% - 80px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 23px;
  height: 263px;
  border-radius: 10px;
`;

export const UserPasswordPageHeading = styled.header`
  font-family: 'ONE-Mobile-Title';
  margin: 0 auto;
  margin-top: 30px;
  color: #2f2f68;
  max-width: 425px;
  width: 80%;
  height: 60px;
  text-align: center;
  @media (max-width: 360px) {
    width: 134px;
  }
`;

export const UserPasswordPageLogoImg = styled.div`
  width: 72px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  right: 10px;
  background-image: url('/src/assets/logoText.png');
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const UserPasswordPageInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const UserPasswordPagePasswordSaveBtn = styled(Button)`
  position: relative;
  margin: 0 auto;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  height: 42px;
  font-size: 20px;
  font-family: 'ONE-Mobile-Title';
  color: #f8fbff;
  border: none;
  border-radius: 21px;
  background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
  margin-bottom: 100px;
`;

export const UserPasswordPageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 80%;
  margin-bottom: 10px;
  margin-top: 5px;
  position: relative;
`;

export const UserPasswordPageInputGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  background: #e4ecfe;
`;

export const UserPasswordPageInputStyle = styled.input`
  width: 80%;
  &:focus {
    outline: none;
  }
  border: none;
  background-color: transparent;
  color: #2f2f68;
  font-size: 14px;
  font-family: 'GangwonEdu_OTFBoldA';
  &::placeholder {
    color: #8b9dc6;
  }
`;

export const UserPasswordPageSeeIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
`;

export const UserPasswordPageSeeIconWrapper = styled.div``;

export const UserPasswordPageText = styled.p`
  margin: 1px 0px 0px 2px;
  text-align: left;
  color: #f44336;
  font-size: 12px;
  font-family: 'GangwonEdu_OTFBoldA';
`;
