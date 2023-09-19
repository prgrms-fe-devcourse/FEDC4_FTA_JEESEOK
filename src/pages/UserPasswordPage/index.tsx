import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { putPassword } from '~/api/settings';
import Header from '~/components/common/Header';
import Button from '~/pages/UserPasswordPage/Button';
import Input from '~/pages/UserPasswordPage/Input';

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
    width: '80%',
    height: '30px',
    disabled: false,
    background: '#e4ecfe',
    border: 'none',
    radius: '8px',
  };

  const ButtonProps = {
    children: '완료',
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
      <Header isLogo={false} title={'비밀번호 변경'} />
      <UserPasswordPageMainWrapper>
        <UserPasswordPageLogoImg />
        <UserPasswordPageHeading>
          새로운 비밀번호를 입력해주세요
        </UserPasswordPageHeading>
        <form onSubmit={handleSubmit} id="editPost">
          <UserPasswordPageInputWrapper>
            <UserPasswordPageInput
              {...InputProps}
              type={showPassword ? 'text' : 'password'}
              value={passwordValue}
              placeHolder={'비밀번호 입력'}
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
              isCancel={false}
            />
            <UserPasswordPagePasswordSeeIcon
              children={''}
              className={'showPassword'}
              type={'button'}
              onMouseDown={() => {
                setShowPassword(true);
              }}
              onMouseUp={() => {
                setShowPassword(false);
              }}
              onTouchStart={() => {
                setShowPassword(true);
              }}
              onTouchEnd={() => {
                setShowPassword(false);
              }}
            ></UserPasswordPagePasswordSeeIcon>
          </UserPasswordPageInputWrapper>
          <UserPasswordPageInputWrapper>
            {' '}
            <UserPasswordPageInput
              {...InputProps}
              type={showPasswordCheck ? 'text' : 'password'}
              value={checkPasswordValue}
              placeHolder={'비밀번호 확인'}
              onClick={() => {
                setCheckPasswordValue('');
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCheckPasswordValue((e.target as HTMLInputElement).value);
              }}
              isError={passwordValue !== checkPasswordValue ? true : false}
              validationText={
                '새 비밀번호가 비밀번호 확인값과 일치하지 않습니다.'
              }
              isCancel={false}
            />
            <UserPasswordPagePasswordSeeIcon
              children={''}
              className={'showPassword'}
              type={'button'}
              onMouseDown={() => {
                setShowPasswordCheck(true);
              }}
              onMouseUp={() => {
                setShowPasswordCheck(false);
              }}
              onTouchStart={() => {
                setShowPasswordCheck(true);
              }}
              onTouchEnd={() => {
                setShowPasswordCheck(false);
              }}
            ></UserPasswordPagePasswordSeeIcon>
          </UserPasswordPageInputWrapper>
        </form>
      </UserPasswordPageMainWrapper>
      <UserPasswordPagePasswordSaveBtn
        {...ButtonProps}
        type="submit"
        form="editPost"
      ></UserPasswordPagePasswordSaveBtn>
    </UserPasswordPageWrapper>
  );
};

export default UserPasswordPage;

const UserPasswordPageMainWrapper = styled.div`
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

const UserPasswordPageInput = styled(Input)`
  ::placeholder {
    font-size: 10.049px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const UserPasswordPageHeading = styled.header`
  font-family: 'ONE-Mobile-Title';
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2f2f68;
  position: relative;
  max-width: 425px;
  width: 100%;
  height: 60px;
  border-radius: 0 0 50px 50px;
`;

const UserPasswordPageLogoImg = styled.div`
  width: 72px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  right: 10px;
  background-image: url('/src/assets/logoText.png');
  background-repeat: no-repeat;
  background-size: 100%;
`;
const UserPasswordPagePasswordSeeIcon = styled(Button)`
  position: absolute;
  top: 14px;
  left: 80%;
  width: 17px;
  height: 12px;
  background-image: url('/src/assets/passwordSeeIcon.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  background-color: #e4ecfe;
`;

const UserPasswordPageInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const UserPasswordPagePasswordSaveBtn = styled(Button)`
  position: relative;
  margin: 0 auto;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 305px;
  height: 42px;
  font-size: 20px;
  font-family: 'ONE-Mobile-Title';
  color: #f8fbff;
  border: none;
  border-radius: 21px;
  background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
`;
