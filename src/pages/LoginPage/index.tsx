import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import logoText from '~/assets/logoText.png';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import {
  ID_INPUT,
  ID_VALIDATION_TEXT,
  InitAuthState,
  InitLoginState,
  PW_INPUT,
  PW_VALIDATION_TEXT,
} from '~/constants/loginConstants.ts';
import { PASSWORD } from '~/constants/signUpConstants.ts';
import useLocalStorage from '~/hooks/useLocalStorage.ts';
import postLoginApi from '../../api/authorization/login.ts';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form``;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 308px;
  height: 273px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f9ff;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px 4px rgb(215, 217, 235, 40%);
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 341px;
  height: 471px;
  background: #f5f9ff;
  margin: 20px;
  border-radius: 25px;
`;

const Span = styled.span`
  margin-top: 10px;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 14px;
  color: #bbcdf7;
`;

const Text = styled.span`
  cursor: pointer;
  color: #494984;
`;

const LogoImg = styled.img`
  width: 171px;
  height: 74px;
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginStateType {
  id: string;
  pw: string;
  isIdError: boolean;
  isPwError: boolean;
}

const LoginPage = () => {
  const [loginState, setLoginState] = useState(InitLoginState);
  const [authState, setAuthState] = useLocalStorage(
    'AUTH_TOKEN',
    InitAuthState
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.token.length > 0) {
      navigate('/');
    }
  }, []);

  const handleSignUpStateChange = useCallback(
    (properties: keyof LoginStateType, value: string | boolean) => {
      setLoginState((prevState: LoginStateType) => ({
        ...prevState,
        [properties]: value,
      }));
    },
    [loginState]
  );

  const callLoginApi = async (e: FormEvent) => {
    e.preventDefault();

    if (loginState.id.length === 0) {
      handleSignUpStateChange('isIdError', true);
      return;
    }

    if (loginState.pw.length === 0) {
      handleSignUpStateChange('isPwError', true);
      return;
    }

    const loginApiResult = await postLoginApi({
      id: loginState.id,
      password: loginState.pw,
    });

    if (loginApiResult) {
      setAuthState(loginApiResult);
      alert('로그인 되었습니다');
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.');
      handleInputCancel('id');
      handleInputCancel('pw');
    }
  };
  const moveSignUp = () => {
    navigate('/signup');
  };

  const handleInputCancel = (properties: keyof LoginStateType) => {
    handleSignUpStateChange(properties, '');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={callLoginApi}>
        <LoginBody>
          <IconContainer>
            <IconWrapper>
              <LogoImg src={logoText}></LogoImg>
            </IconWrapper>
          </IconContainer>
          <Input
            id={ID_INPUT}
            value={loginState.id}
            width={292}
            height={43}
            placeHolder={''}
            isError={loginState.isIdError}
            validationText={ID_VALIDATION_TEXT}
            onChange={(e) => {
              handleSignUpStateChange('id', e.target.value);
              if (loginState.isIdError)
                handleSignUpStateChange('isIdError', false);
            }}
            onClick={() => handleInputCancel('id')}
            border={'1px solid #bbcdf7'}
            topText={'아이디 입력'}
            radius={'10px'}
          />

          <Input
            id={PW_INPUT}
            value={loginState.pw}
            placeHolder={PASSWORD}
            isError={loginState.isPwError}
            validationText={PW_VALIDATION_TEXT}
            width={292}
            height={43}
            type={'password'}
            onChange={(e) => {
              handleSignUpStateChange('pw', e.target.value);
              if (loginState.isPwError)
                handleSignUpStateChange('isPwError', false);
            }}
            onClick={() => handleInputCancel('pw')}
            radius={'10px'}
            border={'1px solid #E4ECFE'}
            background={'#E4ECFE'}
          />
        </LoginBody>
        <ButtonWrapper>
          <Button
            width={188}
            height={59}
            radius={'40px'}
            background={`linear-gradient(51deg, #FCCBF3 10%, #72CDFF 122.17%)`}
          >
            로그인
          </Button>
        </ButtonWrapper>
      </LoginForm>
      <Span>
        회원이 아니신가요? <Text onClick={moveSignUp}>회원가입 하기</Text>
      </Span>
    </LoginContainer>
  );
};

export default LoginPage;
