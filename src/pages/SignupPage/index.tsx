import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import logoText from '~/assets/logoText.png';
import Button from '~/components/common/Button';
import Header from '~/components/common/Header';
import Modal from '~/components/common/Modal/index.tsx';
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

const LogoImg = styled.img`
  width: 150px;
  height: 65px;
  margin-bottom: 20px;
`;

const SignUpBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 341px;
  height: 514px;
  margin: 20px;
  background: #f5f9ff;
  border-radius: 25px;
`;

type ValidationObj = {
  [key: string]: boolean | undefined;
};

const SignupPage = () => {
  const [signUpState, setSignUpState] =
    useState<SignUpStateType>(InitSignUpState);
  const [modalState, setModalState] = useState(false);
  const [messageState, setMessageState] = useState('');
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
    if (fullName.mbti.join('').length !== 4) {
      setMessageState('mbti를 입력해주세요!');
      setModalState(true);
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
      setMessageState('가입되었습니다.');
      setModalState(true);
    } else {
      setMessageState('중복아이디입니다!');
      setModalState(true);
    }
  };

  const handleCloseButtonClick = () => {
    setModalState(false);

    if (messageState === '가입되었습니다.') {
      navigate('/login');
    }
  };

  return (
    <SignUpContainer>
      <Header isLogo={false} isSearch={false} title={TITLE} />
      <SignUpBody>
        <LogoImg src={logoText}></LogoImg>
        <SignUpForm signUpState={signUpState} setSignUpState={setSignUpState} />
        <MbtiButton setSignUpState={setSignUpState}></MbtiButton>
      </SignUpBody>
      <Button
        width={341}
        height={42}
        onClick={apiCall}
        background={
          'linear-gradient(71deg, #FCCBF3 4.69%, #E8CBF4 24.48%, #B6CCF9 64.93%, #72CDFF 113.68%)'
        }
        radius={'20px'}
      >
        {TITLE}
      </Button>
      {modalState && (
        <Modal handleCloseButtonClick={handleCloseButtonClick}>
          {messageState}
        </Modal>
      )}
    </SignUpContainer>
  );
};

export default SignupPage;
