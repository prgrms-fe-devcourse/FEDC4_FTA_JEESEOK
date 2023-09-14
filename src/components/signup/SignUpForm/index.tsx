import React, { useCallback, useMemo } from 'react';
import Input from '~/components/common/Input';
import { SignUpFormContainer } from '~/components/signup/SignUpForm/signUpFormStyle.ts';
import {
  NICK_NAME,
  NICK_NAME_VALIDATION,
  PASSWORD,
  PASSWORD_CHECK,
  PASSWORD_CHECK_VALIDATION,
  PASSWORD_VALIDATION,
  USER_ID,
  USER_ID_VALIDATION,
} from '~/constants/signUpConstants.ts';
import { SignUpStateType, inputType } from '~/types/signUpTypes.ts';

interface MbtiButtonProps {
  signUpState: SignUpStateType;
  setSignUpState: React.Dispatch<React.SetStateAction<SignUpStateType>>;
}

const SignUpForm = ({ signUpState, setSignUpState }: MbtiButtonProps) => {
  const validationFormat = useMemo(
    () => ({
      id: /^[a-z0-9_-]{5,20}$/,
      pw: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      nickName: /^.{2,7}$/,
      pwCheck: signUpState.pw,
    }),
    [signUpState.pw]
  );

  const errorFormat: Record<inputType, keyof SignUpStateType> = useMemo(
    () => ({
      id: 'isIdError',
      pw: 'isPwError',
      nickName: 'isNickNameError',
      pwCheck: 'isPwCheckError',
    }),
    []
  );

  const handleInputChange = (properties: inputType, value: string) => {
    handleSignUpStateChange(properties, value);
    if (value.length > 0) {
      validationCheck(properties, value);
    } else {
      resetValidation(properties);
    }
  };

  const handleInputCancel = (properties: inputType) => {
    handleSignUpStateChange(properties, '');
    resetValidation(properties);
  };

  const resetValidation = (properties: inputType) => {
    handleSignUpStateChange(errorFormat[properties], false);
  };

  const validationCheck = (properties: inputType, value: string) => {
    if (properties === 'pwCheck') {
      handleSignUpStateChange(
        'isPwCheckError',
        validationFormat[properties] !== value
      );
    } else {
      handleSignUpStateChange(
        errorFormat[properties],
        !validationFormat[properties].test(value)
      );
    }
  };

  const handleSignUpStateChange = useCallback(
    (properties: keyof SignUpStateType, value: string | boolean) => {
      setSignUpState((prevState: SignUpStateType) => ({
        ...prevState,
        [properties]: value,
      }));
    },
    [signUpState]
  );

  return (
    <SignUpFormContainer>
      <Input
        id={'idRow'}
        value={signUpState.id}
        placeHolder={USER_ID}
        width={'100%'}
        height={40}
        onChange={(e) => handleInputChange('id', e.target.value)}
        onClick={() => handleInputCancel('id')}
        isError={signUpState.isIdError}
        validationText={USER_ID_VALIDATION}
      />
      <Input
        id={'pwRow'}
        value={signUpState.pw}
        type={'password'}
        placeHolder={PASSWORD}
        width={'100%'}
        height={40}
        onChange={(e) => handleInputChange('pw', e.target.value)}
        onClick={() => handleInputCancel('pw')}
        isError={signUpState.isPwError}
        validationText={PASSWORD_VALIDATION}
      />
      <Input
        id={'pwCheckRow'}
        value={signUpState.pwCheck}
        type={'password'}
        placeHolder={PASSWORD_CHECK}
        width={'100%'}
        height={40}
        onChange={(e) => handleInputChange('pwCheck', e.target.value)}
        onClick={() => handleInputCancel('pwCheck')}
        isError={signUpState.isPwCheckError}
        validationText={PASSWORD_CHECK_VALIDATION}
      />
      <Input
        id={'nickNameRow'}
        value={signUpState.nickName}
        placeHolder={NICK_NAME}
        width={'100%'}
        height={40}
        onChange={(e) => handleInputChange('nickName', e.target.value)}
        onClick={() => handleInputCancel('nickName')}
        isError={signUpState.isNickNameError}
        validationText={NICK_NAME_VALIDATION}
      />
    </SignUpFormContainer>
  );
};

export default SignUpForm;
