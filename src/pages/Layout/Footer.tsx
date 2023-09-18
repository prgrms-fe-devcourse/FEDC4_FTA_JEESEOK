import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

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
      console.log(error);
      return '';
    }
  };

  const footerMenu = getUserId()
    ? [
        { name: '게시판', page: 'post' },
        { name: '알림', page: 'notification' },
        { name: '마이', page: `user/${getUserId()}` },
      ]
    : [
        { name: '게시판', page: 'post' },
        { name: '로그인', page: 'login' },
      ];

  return (
    <FooterContainer>
      {getUserId() && ['/', '/post'].includes(pathname) && (
        <CreateButton onClick={handleCreateButtonClick}>글쓰기</CreateButton>
      )}
      {footerMenu.map(({ name, page }) => (
        <FooterButton key={page} onClick={() => handleFooterClick(page)}>
          {name}
        </FooterButton>
      ))}
    </FooterContainer>
  );
};

export default Footer;

const CreateButton = styled.button`
  position: absolute;
  bottom: 80px;
  right: 20px;
  border-radius: 20px;
  background-color: white;
  width: 60px;
  white-space: nowrap;
  height: 30px;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  max-width: 425px;
  height: 65px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 777;
`;

export const FooterButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid;
  background-color: white;
  cursor: pointer;
`;
