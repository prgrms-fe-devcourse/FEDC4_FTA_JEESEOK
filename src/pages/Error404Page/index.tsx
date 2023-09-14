import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Header from '~/components/common/Header';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderStyled = styled(Header)`
  position: absolute;
  top: 0;
  max-width: 425px;
  box-sizing: border-box;
`;
const ContentWrapper = styled.div`
  height: calc(100% - 8vh);
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

  return (
    <PageWrapper>
      <HeaderStyled isLogo isSearch={false} title="" />
      <ContentWrapper>
        <ContentText>404</ContentText>
        <ButtonStyled onClick={() => navigate('/')}>게시판 가기</ButtonStyled>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Error404Page;
