import { useLocation, useNavigate } from 'react-router-dom';
import Image from '~/components/common/Image';
import {
  createImg,
  loginImg,
  logoImg,
  myInfoImg,
  notificationImg,
  signupImg,
} from './assets';
import { CreateButton, FooterButton, FooterContainer } from './style';

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleFooterClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleCreateButtonClick = () => {
    navigate('/post/create/edit');
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
              style={{
                boxShadow: 'none',
              }}
              onClick={() => handleFooterClick(page)}
            >
              <Image width={50} height={40} src={image} alt={name} />
            </FooterButton>
          ) : (
            <FooterButton
              key={page}
              width={'45px'}
              height={'45px'}
              backgroundColor={'#F5F9FF'}
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
