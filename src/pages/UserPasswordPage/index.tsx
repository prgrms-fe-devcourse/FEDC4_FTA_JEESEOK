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

  useEffect(() => {
    const getAuthCheck = async () => {
      const isAuth = await getAuthorizationCheckApi();
      console.log(isAuth);
      //만약 error나면 어떻게 처리할거임
      if (typeof isAuth === 'string') {
        navigate('/');
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
      //putpassword
      navigate('/');
    }
  };

  const InputProps = {
    id: 'newPassword',
    placeHolder: '비밀번호를 입력해주세요',
    width: '80%',
    height: '30px',
    type: 'password',
    isError: false,
    disabled: false,
    validationText: '',
    onClick: () => {},
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
          value={passwordValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordValue((e.target as HTMLInputElement).value);
          }}
        />
        <p>비밀번호 확인</p>
        <Input
          {...InputProps}
          value={checkPasswordValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckPasswordValue((e.target as HTMLInputElement).value);
          }}
        />
      </form>
      <Button {...ButtonProps} type="submit" form="editPost"></Button>
    </UserPasswordPageWrapper>
  );
};

export default UserPasswordPage;
