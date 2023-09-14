import { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { readPost } from '~/api/post';
import CommentCard from '~/components/common/CommentCard';
import Header from '~/components/common/Header';
import { Post } from '~/types';
import Input from "~/components/common/Input";

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostDetailBody = styled.div``;
const Title = styled.p``;
const Body = styled.p``;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    const author = postDetailState?.author?.username || '';
    const like = postDetailState?.likes || [];
    const comments = postDetailState?.comments || [];
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
      author,
      like,
      comments,
    };
  }, [postDetailState]);
  const { channelName, title, body, author, like, comments } = postDetailData;

  return (
    <PostDetailContainer>
      <Header isLogo={false} isSearch={false} title={channelName}></Header>
      <PostDetailBody>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <p>{author}</p>
        <p>{`좋아요 : ${like.length}`}</p>
      </PostDetailBody>
      <CommentContainer>
        <p>{`댓글수 : ${comments.length}`}</p>
        {comments.length > 0 && (
          <CommentCard
            _id={comments[0]._id}
            comment={comments[0].comment}
            author={comments[0].author}
            post={comments[0].post}
            createdAt={comments[0].createdAt}
          />
        )}
      </CommentContainer>
      <Input id={} value={} placeHolder={} width={} height={}></Input>
    </PostDetailContainer>
  );
};

export default PostDetailPage;
