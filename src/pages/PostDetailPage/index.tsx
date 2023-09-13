import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { readPost } from '~/api/post';
import Header from '~/components/common/Header';
import { Post } from '~/types';

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostDetailBody = styled.div``;
const Title = styled.p``;
const Body = styled.p``;

const PostDetailPage = () => {
  // const { postId } = useParams();
  const [postDetailState, setPostDetailState] = useState<Post>();
  const postId = '6500046076a8b6216821e042';
  const postDetailApiCall = async () => {
    const postDetailResult = (await readPost(postId)) as unknown as Post;
    setPostDetailState(postDetailResult);
    console.log(postDetailResult);
  };

  useEffect(() => {
    postDetailApiCall();
  }, []);

  const postDetailData = useMemo(() => {
    const channelName = postDetailState?.channel?.name || '';
    const titleBody = postDetailState?.title || '';
    let title = '';
    let body = '';
    if (titleBody.length > 0) {
      title = JSON.parse(titleBody)['title'];
      body = JSON.parse(titleBody)['body'];
    }

    return {
      channelName,
      title,
      body,
    };
  }, [postDetailState]);
  const { channelName, title, body } = postDetailData;

  return (
    <PostDetailContainer>
      <Header isLogo={false} isSearch={false} title={channelName}></Header>
      <PostDetailBody>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </PostDetailBody>
    </PostDetailContainer>
  );
};

export default PostDetailPage;
