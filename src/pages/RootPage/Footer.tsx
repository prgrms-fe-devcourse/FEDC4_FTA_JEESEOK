import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

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

interface FooterProps {
  userId: string | undefined;
}

const Footer = ({ userId }: FooterProps) => {
  const navigate = useNavigate();

  const handleFooterClick = (page: string) => {
    navigate(`/${page}`);
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
      {contents.map(({ name, page }) => (
        <FooterButton key={page} onClick={() => handleFooterClick(page)}>
          {name}
        </FooterButton>
      ))}
    </FooterContainer>
  );
};

export default Footer;
