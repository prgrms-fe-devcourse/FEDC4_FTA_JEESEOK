import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Header from '~/components/common/Header';
import MbtiButton from '~/components/signup/MbtiButton';
import SignUpForm from '~/components/signup/SignUpForm';
import { InitSignUpState, TITLE } from '~/constants/signUpConstants.ts';
import { SignUpStateType } from '~/types/signUpTypes.ts';
import postSignupApi from '../../api/authorization/signup.ts';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpBody = styled.div`
  width: 90%;
  height: 600px;
  background: white;
  opacity: 0.9;
  margin: 20px;
  box-shadow: 10px 10px 5px rgb(0, 0, 0, 0.8);
`;

type ValidationObj = {
  [key: string]: boolean | undefined;
};

const SignupPage = () => {
  const [signUpState, setSignUpState] =
    useState<SignUpStateType>(InitSignUpState);
  const navigate = useNavigate();

  const validationCheck = (length: number, obj: ValidationObj) => {
    if (length === 0) {
      setSignUpState((prevState) => ({
        ...prevState,
        ...obj,
      }));
    }
  };

  const apiCall = async () => {
    const {
      id,
      pw,
      pwCheck,
      nickName,
      fullName,
      isIdError,
      isPwError,
      isPwCheckError,
      isNickNameError,
    } = signUpState;

    if (isIdError || isPwError || isPwCheckError || isNickNameError) return;

    const hasError = [
      { length: id.length, obj: { isIdError: true } },
      { length: pw.length, obj: { isPwError: true } },
      { length: pwCheck.length, obj: { isPwCheckError: true } },
      { length: nickName.length, obj: { isNickNameError: true } },
    ].some(({ length, obj }) => validationCheck(length, obj));

    if (hasError) return;
    if (fullName.mbti.length !== 4) {
      alert('mbti를 입력해주세요!');
      return;
    }

    const apiRequestData = {
      email: id,
      fullName: {
        mbti: fullName.mbti.join(''),
        intro: fullName.introduce,
      },
      username: nickName,
      password: pw,
    };

    const result = await postSignupApi(apiRequestData);

    if (result) {
      alert('가입되었습니다.');
      navigate('/login');
    } else {
      console.log('중복 아이디 로직 추가');
    }
  };

  return (
    <SignUpContainer>
      <Header isLogo={false} isSearch={false} title={TITLE} />
      <SignUpBody>
        <SignUpForm signUpState={signUpState} setSignUpState={setSignUpState} />
        <MbtiButton setSignUpState={setSignUpState}></MbtiButton>
      </SignUpBody>
      <Button width={'100%'} height={80} onClick={apiCall}>
        {TITLE}
      </Button>
    </SignUpContainer>
  );
};

export default SignupPage;
