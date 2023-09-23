import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { putPassword } from '~/api/settings';
import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import {
  UserPasswordPageHeading,
  UserPasswordPageInputContainer,
  UserPasswordPageInputGroupContainer,
  UserPasswordPageInputStyle,
  UserPasswordPageInputWrapper,
  UserPasswordPageLogoImg,
  UserPasswordPageMainWrapper,
  UserPasswordPagePasswordSaveBtn,
  UserPasswordPageSeeIcon,
  UserPasswordPageSeeIconWrapper,
  UserPasswordPageText,
  UserPasswordPageWrapper,
} from '~/pages/UserPasswordPage/UserPasswordPageStyle';

const regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const UserPasswordPage = () => {
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState('');
  const [checkPasswordValue, setCheckPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAuthCheck = async () => {
      setLoading(true);
      const isAuth = await getAuthorizationCheckApi();

      if (!isAuth) {
        navigate('/');
        setLoading(false);
        return;
      }
      setLoading(false);
    };

    getAuthCheck();
  }, [navigate]);

  scrollTo(0, 0);

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
      {loading ? (
        <Loading isLoading />
      ) : (
        <>
          <Header isLogo={false} title={'비밀번호 변경'} />
          <UserPasswordPageMainWrapper>
            <UserPasswordPageLogoImg />
            <UserPasswordPageHeading>
              새로운 비밀번호를 입력해주세요
            </UserPasswordPageHeading>
            <form onSubmit={handleSubmit} id="editPost">
              {' '}
              <UserPasswordPageInputWrapper>
                <UserPasswordPageInputContainer>
                  <UserPasswordPageInputGroupContainer>
                    <UserPasswordPageInputStyle
                      type={showPassword ? 'text' : 'password'}
                      value={passwordValue}
                      placeholder={'비밀번호 입력'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPasswordValue((e.target as HTMLInputElement).value);
                      }}
                    />
                    {passwordValue.length > 0 && (
                      <UserPasswordPageSeeIconWrapper
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
                      >
                        <UserPasswordPageSeeIcon src="/src/assets/passwordSeeIcon.svg" />
                      </UserPasswordPageSeeIconWrapper>
                    )}
                  </UserPasswordPageInputGroupContainer>
                  {passwordValue.length > 0 && !regPass.test(passwordValue) && (
                    <UserPasswordPageText>
                      비밀번호는 영문,숫자를 포함해서 8자 이상 입력해주세요.
                    </UserPasswordPageText>
                  )}
                </UserPasswordPageInputContainer>
              </UserPasswordPageInputWrapper>
              <UserPasswordPageInputWrapper>
                <UserPasswordPageInputContainer>
                  <UserPasswordPageInputGroupContainer>
                    <UserPasswordPageInputStyle
                      type={showPasswordCheck ? 'text' : 'password'}
                      value={checkPasswordValue}
                      placeholder={'비밀번호 확인'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCheckPasswordValue(
                          (e.target as HTMLInputElement).value
                        );
                      }}
                    />
                    {checkPasswordValue.length > 0 && (
                      <UserPasswordPageSeeIconWrapper
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
                      >
                        <UserPasswordPageSeeIcon src="/src/assets/passwordSeeIcon.svg" />
                      </UserPasswordPageSeeIconWrapper>
                    )}
                  </UserPasswordPageInputGroupContainer>
                  {checkPasswordValue.length > 0 &&
                    passwordValue !== checkPasswordValue && (
                      <UserPasswordPageText>
                        새 비밀번호가 비밀번호 확인값과 일치하지 않습니다.
                      </UserPasswordPageText>
                    )}
                </UserPasswordPageInputContainer>
              </UserPasswordPageInputWrapper>
            </form>
          </UserPasswordPageMainWrapper>
          <UserPasswordPagePasswordSaveBtn
            {...ButtonProps}
            type="submit"
            form="editPost"
          ></UserPasswordPagePasswordSaveBtn>{' '}
        </>
      )}
    </UserPasswordPageWrapper>
  );
};

export default UserPasswordPage;
