import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import planet from './planet.png';
import {
  ContentImage,
  ContentText,
  ContentWrapper,
  PageWrapper,
} from './style';

const Error404Page = () => {
  return (
    <PageWrapper>
      <Header isLogo={false} />
      <ContentWrapper>
        <ContentImage src={planet} />
        <ContentText>404</ContentText>
      </ContentWrapper>
      <Loading />
    </PageWrapper>
  );
};

export default Error404Page;
