import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Footer from '../Footer';

const NavWrapper = styled.div`
  width: 100%;
  height: 8vh;
  background-color: aquamarine;
`;
const FooterStyled = styled(Footer)`
  position: fixed;
  left: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Nav = () => {
  const navigate = useNavigate();
  //const loginNav = ['게시판', '알림', '마이페이지'];
  const notLoginNav = ['게시판', '로그인'];

  const handleBottomNav = (e) => {
    const nav = e.target.textContent;
    if (nav === '게시판') {
      navigate('/');
    } else if (nav === '로그인') {
      navigate('/login');
    } else if (nav === '알림') {
      navigate('/notification');
    } else if (nav === '마이페이지') {
      navigate('/user/post');
    } else {
      navigate('noPage');
    }
  };

  return (
    <NavWrapper>
      <FooterStyled content={notLoginNav} onClick={handleBottomNav} />
    </NavWrapper>
  );
};

export default Nav;
