import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { putPassword } from '~/api/settings';
import Input from '~/components/common/Input';
import Button from '~/pages/UserPasswordPage/Button';

const UserPasswordPageWrapper = styled.div`
  width: 100%;
`;

const regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const UserPasswordPage = () => {
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState('');
  const [checkPasswordValue, setCheckPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  useEffect(() => {
    const getAuthCheck = async () => {
      const isAuth = await getAuthorizationCheckApi();

      if (!isAuth) {
        navigate('/');
        return;
      }
    };
    getAuthCheck();
  }, [navigate]);

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regPass.test(passwordValue)) {
      alert('비밀번호는 영문,숫자를 포함해서 8자 이상 입력해주세요.');
    } else if (passwordValue !== checkPasswordValue) {
      alert('새 비밀번호가 비밀번호 확인값과 일치하지 않습니다.');
    } else {
      alert('비밀번호가 변경되었습니다!');
      putPassword(passwordValue);
      navigate('/');
    }
  };

  const InputProps = {
    id: 'newPassword',
    placeHolder: '비밀번호를 입력해주세요',
    width: '80%',
    height: '30px',
    disabled: false,
  };

  const ButtonProps = {
    children: 'Save',
    className: 'submitButton',
    disabled: false,
    onClick: () => {},
    isLoading: false,
    fontSize: '14px',
    fontWeight: '400',
    width: '40px',
    height: '20px',
  };

  return (
    <UserPasswordPageWrapper>
      <form onSubmit={handleSubmit} id="editPost">
        <p>새 비밀번호</p>
        <Input
          {...InputProps}
          type={showPassword ? 'text' : 'password'}
          value={passwordValue}
          onClick={() => {
            setPasswordValue('');
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordValue((e.target as HTMLInputElement).value);
          }}
          isError={!regPass.test(passwordValue) ? true : false}
          validationText={
            '비밀번호는 영문,숫자를 포함해서 8자 이상 입력해주세요.'
          }
        />
        <p>비밀번호 확인</p>
        <Button
          children={'eye'}
          className={'showPassword'}
          type={'button'}
          onMouseDown={() => {
            setShowPassword(true);
          }}
          onMouseUp={() => {
            setShowPassword(false);
          }}
        ></Button>
        <Input
          {...InputProps}
          type={showPasswordCheck ? 'text' : 'password'}
          value={checkPasswordValue}
          onClick={() => {
            setCheckPasswordValue('');
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckPasswordValue((e.target as HTMLInputElement).value);
          }}
          isError={passwordValue !== checkPasswordValue ? true : false}
          validationText={'새 비밀번호가 비밀번호 확인값과 일치하지 않습니다.'}
        />
        <Button
          children={'eye'}
          className={'showPassword'}
          type={'button'}
          onMouseDown={() => {
            setShowPasswordCheck(true);
          }}
          onMouseUp={() => {
            setShowPasswordCheck(false);
          }}
        ></Button>
      </form>
      <Button {...ButtonProps} type="submit" form="editPost"></Button>
    </UserPasswordPageWrapper>
  );
};

export default UserPasswordPage;
