import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Image from '~/components/common/Image';
import createImg from './create.svg';
import loginImg from './login.svg';
import logoImg from './logo.svg';
import myInfoImg from './myInfo.svg';
import notificationImg from './notification.svg';
import signupImg from './signup.svg';

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleFooterClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleCreateButtonClick = () => {
    navigate('/post/create');
  };

  const getUserId = (): string => {
    try {
      const storageValue = localStorage.getItem('AUTH_TOKEN');
      return storageValue ? JSON.parse(storageValue).user._id : '';
    } catch (error) {
      console.error(error);
      return '';
    }
  };

  const footerMenu = getUserId()
    ? [
        { name: '알림', page: 'notification', image: notificationImg },
        { name: '게시판', page: 'post', image: logoImg },
        { name: '내 정보', page: `user/${getUserId()}`, image: myInfoImg },
      ]
    : [
        { name: '회원가입', page: 'signup', image: signupImg },
        { name: '게시판', page: 'post', image: logoImg },
        { name: '로그인', page: 'login', image: loginImg },
      ];

  return (
    <>
      <FooterContainer>
        {getUserId() && ['/', '/post'].includes(pathname) && (
          <CreateButton onClick={handleCreateButtonClick}>
            <Image width={75} height={75} src={createImg} />
          </CreateButton>
        )}
        {footerMenu.map(({ name, page, image }) =>
          page === 'post' ? (
            <FooterButton
              key={page}
              width={'70px'}
              height={'70px'}
              backgroundColor={'transparent'}
              onClick={() => handleFooterClick(page)}
            >
              <Image width={50} height={40} src={image} alt={name} />
            </FooterButton>
          ) : (
            <FooterButton
              key={page}
              width={'45px'}
              height={'45px'}
              backgroundColor={'white'}
              onClick={() => handleFooterClick(page)}
            >
              <Image width={20} height={20} src={image} alt={name} />
            </FooterButton>
          )
        )}
      </FooterContainer>
      <div style={{ height: '90px' }} />
    </>
  );
};

export default Footer;

const CreateButton = styled.button`
  position: absolute;
  bottom: 90px;
  right: 20px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  max-width: 425px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 777;
  border-radius: 50px 50px 0 0;
  background-color: #f5f9ff;
`;

interface FooterButtonProps {
  width: string;
  height: string;
  backgroundColor: string;
}

export const FooterButton = styled.button<FooterButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;
