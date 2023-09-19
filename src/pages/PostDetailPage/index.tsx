import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { deleteLike, postLike } from '~/api/like';
import { postNotification } from '~/api/notification';
import { readPost } from '~/api/post';
import Header from '~/components/common/Header';
import Comments from '~/components/postDetail/Comments.tsx';
import PostDetail from '~/components/postDetail/PostDetail.tsx';
import { initLikeState, initPostDetailState } from '~/constants/postDetail.ts';
import { Post } from '~/types';
import { getDate } from '~/utils';

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostDetailPage = () => {
  const { postId } = useParams() as { postId: string };
  // const postId = '6503f6e7febd7c193edf4bd4';

  /*
   * useLocalStorage훅을 수정해야할거 같음
   * 1. 훅안에서 기본 initialValue를 처리하도록 수정
   * 2. isLogin이라는 플래그 값을 추가
   * **/
  const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
  const userInfo = AUTH_TOKEN ? JSON.parse(AUTH_TOKEN) : null;
  const userId = userInfo ? userInfo?.user?._id : '';

  const [postDetailState, setPostDetailState] =
    useState<Post>(initPostDetailState);
  const [likeState, setLikeState] = useState(initLikeState);

  const postDetailApiCall = async () => {
    if (postId) {
      const postDetailResult = await readPost(postId);
      setPostDetailState(postDetailResult);
      console.log(postDetailResult);
    }
  };

  const toggleLike = async () => {
    const LIKE = 'LIKE';
    const { isLike, likeId } = likeState;
    if (!userId) {
      alert('로그인 후 사용가능합니다.');
      return;
    }

    if (isLike) {
      await deleteLike({ likeId });
    } else {
      const data = await postLike({ postId });
      await postNotification({
        notificationType: LIKE,
        notificationTypeId: data._id,
        userId: postDetailData.author?._id,
        postId: postId,
      });
    }

    await postDetailApiCall();
  };

  //게시글 디테일 API 콜
  useEffect(() => {
    postDetailApiCall();
  }, [postId]);

  useEffect(() => {
    const likedData = postDetailState.likes.find(
      (like) => like.user === userId
    );

    if (likedData) {
      setLikeState({
        likeId: likedData._id,
        isLike: true,
      });
    } else {
      setLikeState({
        likeId: '',
        isLike: false,
      });
    }
  }, [postDetailState]);

  const postDetailData = useMemo(() => {
    const channelName = postDetailState?.channel?.name || '';
    const titleBody = postDetailState?.title || '';
    const author = postDetailState?.author;
    const comments = postDetailState?.comments;
    const updateAt = getDate(postDetailState.updatedAt);
    let title = '';
    let body = '';
    const likeCount = postDetailState?.likes.length;

    if (titleBody.length > 0) {
      title = JSON.parse(titleBody)['title'];
      body = JSON.parse(titleBody)['body'];
    }

    return {
      channelName,
      title,
      body,
      author,
      likeCount,
      comments,
      updateAt,
    };
  }, [postDetailState]);
  const { channelName, title, body, author, likeCount, updateAt } =
    postDetailData;
  return (
    <PostDetailContainer>
      <Header isLogo={false} isSearch={false} title={''}></Header>
      <PostDetail
        channelName={channelName}
        title={title}
        body={body}
        author={author}
        likeCount={likeCount}
        updateAt={updateAt}
        isLike={likeState.isLike}
        onLikeClick={toggleLike}
      />
      <Comments
        comments={postDetailState.comments}
        postId={postId}
        postUserId={postDetailData.author?._id}
        userId={userInfo ? userInfo.user._id : userInfo}
        updateComment={postDetailApiCall}
      />
    </PostDetailContainer>
  );
};

export default PostDetailPage;
