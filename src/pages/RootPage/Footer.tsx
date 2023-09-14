import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface FooterProps {
  userId: string | undefined;
}

const Footer = ({ userId }: FooterProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleFooterClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleCreateButtonClick = () => {
    navigate('/post/create');
  };

  const contents = userId
    ? [
        { name: '게시판', page: 'post' },
        { name: '알림', page: 'notification' },
        { name: '마이', page: `user/${userId}` },
      ]
    : [
        { name: '게시판', page: 'post' },
        { name: '로그인', page: 'login' },
      ];

  return (
    <FooterContainer>
      {userId && ['/', '/post'].includes(pathname) && (
        <CreateButton onClick={handleCreateButtonClick}>글쓰기</CreateButton>
      )}
      {contents.map(({ name, page }) => (
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
