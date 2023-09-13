import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
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
import { PASSWORD, USER_ID } from '~/constants/signUpConstants.ts';
import useLocalStorage from '~/hooks/useLocalStorage.ts';
import postLoginApi from '../../api/authorization/login.ts';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBody = styled.div`
  width: 90%;
  height: 600px;
  background: white;
  opacity: 0.9;
  margin: 20px;
  box-shadow: 10px 10px 5px rgb(0, 0, 0, 0.8);
`;

const Text = styled.span`
  cursor: pointer;
`;

interface LoginStateType {
  id: string;
  pw: string;
  isIdError: boolean;
  isPwError: boolean;
}

const LoginPage = () => {
  const [loginState, setLoginState] = useState(InitLoginState);
  const [authState, setAuthState] = useLocalStorage('location', InitAuthState);
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

  const callLoginApi = async () => {
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
      <LoginBody>
        <Input
          id={ID_INPUT}
          value={loginState.id}
          placeHolder={USER_ID}
          width={'100%'}
          height={40}
          isError={loginState.isIdError}
          validationText={ID_VALIDATION_TEXT}
          onChange={(e) => {
            handleSignUpStateChange('id', e.target.value);
            handleSignUpStateChange('isIdError', false);
          }}
          onClick={() => handleInputCancel('id')}
        />
        <Input
          id={PW_INPUT}
          value={loginState.pw}
          placeHolder={PASSWORD}
          isError={loginState.isPwError}
          validationText={PW_VALIDATION_TEXT}
          width={'100%'}
          height={40}
          type={'password'}
          onChange={(e) => {
            handleSignUpStateChange('pw', e.target.value);
            handleSignUpStateChange('isPwError', false);
          }}
          onClick={() => handleInputCancel('pw')}
        />
        <Button onClick={callLoginApi}>로그인</Button>
        <Text onClick={moveSignUp}>회원이 아니신가요?</Text>
      </LoginBody>
    </LoginContainer>
  );
};

export default LoginPage;
