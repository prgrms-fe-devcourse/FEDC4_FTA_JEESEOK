import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentText = styled.div`
  color: #2f2f68;
  //font-family: PyeongChang Peace;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ButtonStyled = styled(Button)`
  width: 194.861px;
  height: 42.955px;
  color: white;
  text-align: center;
  display: block;
  font-size: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  background-image: url('src/assets/404_go_post.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Error404Page = () => {
  const navigate = useNavigate();
  const content = ['게시판', '알림', '마이페이지'];

  const handleBottomNav = (e: MouseEvent) => {
    const nav = (e.target as HTMLButtonElement).textContent;
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
    <PageWrapper>
      <HeaderWrapper>
        <Header isLogo isSearch={false} title="" />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentText>404</ContentText>
        <ButtonStyled>게시판 가기</ButtonStyled>
      </ContentWrapper>
      <Footer content={content} onClick={handleBottomNav} />
    </PageWrapper>
  );
};

export default Error404Page;
