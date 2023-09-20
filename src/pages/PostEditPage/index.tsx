import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import Header from '~/components/common/Header';
import Tag from '~/pages/PostEditPage/Tag';
import Textarea from '~/pages/PostEditPage/Textarea';
import { editPost, readPost, writePost } from '~/pages/PostEditPage/post';

const CHANNEL_ID = {
  WORK: '64f57dc874128417c268916c',
  LOVE: '64f57dd474128417c2689170',
  RELATION: '64f96db08a4e9a3147d9117a',
  MONEY: '64f96d8e8a4e9a3147d91176',
};

const PostEditPageWrapper = styled.div`
  width: 100%;
`;

const PostEditPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [active, setActive] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');

  useEffect(() => {
    const getAuthCheck = async () => {
      const isAuth = await getAuthorizationCheckApi();

      if (!isAuth) {
        navigate('/');
        return;
      }

      if (postId === 'create') {
        setTitle('');
        return;
      }

      if (typeof postId === 'string') {
        const postData = (await readPost(postId))?.data;
        if (postData && postData.author.email === isAuth.email) {
          const postInformation = JSON.parse(postData.title);
          setTitle(postInformation.title);
          setText(postInformation.body);
          return;
        }
        navigate('/');
      }
    };

    getAuthCheck();
  }, [navigate, postId]);

  function handleSubmit() {
    if (title === '') {
      alert('제목을 적어주세요');
    } else if (text === '') {
      alert('글 내용이 필요합니다');
    } else if (selectedChannel === '') {
      alert('태그를 선택해주세요');
    } else if (postId === 'create') {
      writePost(
        JSON.stringify({ title: title, body: text }),
        null,
        selectedChannel
      );
      navigate('/');
    } else if (typeof postId === 'string') {
      editPost({
        postId,
        title: JSON.stringify({ title: title, body: text }),
        channelId: selectedChannel,
      });
      navigate('/');
    }
  }

  const TagProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setActive((e.target as HTMLButtonElement).id);
      setSelectedChannel((e.target as HTMLButtonElement).id);
    },
    width: '58px',
    height: '24px',
    fontColor: 'rgba(139, 157, 198, 1)',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '20px',
    borderWidth: '10px',
    borderColor: '#ffffff',
    fontSize: '12px',
    disabled: false,
    isLoading: false,
    activeBackgroundColor:
      'linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff)',
    activeFontColor: '#f8fbff',
  };

  const TextareaProps = {
    width: `calc(100% - 20px)`,
    height: '100%',
    borderRadius: '15px',
    fontSize: '16px',
    scrollBarThumbColor: 'gray',
    scrollBarWidth: 1,
  };

  return (
    <PostEditPageWrapper>
      <Header
        isLogo={false}
        isSearch={false}
        isSave={true}
        title={'게시글 작성'}
        handleSaveButtonClick={() => handleSubmit()}
      ></Header>
      <PostEditPageMainWrapper>
        <PostEditPageHeading marginBottom={'0px'}>제목</PostEditPageHeading>
        <PostEditPageTextarea
          {...TextareaProps}
          value={title}
          height={'25px'}
          fontSize="16px"
          overFlow="hidden"
          onChange={(e: MouseEvent<HTMLTextAreaElement>) =>
            setTitle((e.target as HTMLTextAreaElement).value)
          }
          placeholder="제목을 작성해 주세요"
          backgroundColor={'#f5f9ff'}
        ></PostEditPageTextarea>
        <PostEditPageHorizontalLine
          marginTop={'10px'}
        ></PostEditPageHorizontalLine>
        <PostEditPageHeading marginBottom={'8px'}>태그</PostEditPageHeading>
        <PostEditPageTagWrapper>
          <PostEditPageTag
            {...TagProps}
            children={'연애'}
            id={CHANNEL_ID.LOVE}
            className={CHANNEL_ID.LOVE == active ? 'active' : ''}
          ></PostEditPageTag>
          <PostEditPageTag
            {...TagProps}
            children={'취업'}
            id={CHANNEL_ID.WORK}
            className={CHANNEL_ID.WORK == active ? 'active' : ''}
          ></PostEditPageTag>
          <PostEditPageTag
            {...TagProps}
            children={'인간관계'}
            id={CHANNEL_ID.RELATION}
            className={CHANNEL_ID.RELATION == active ? 'active' : ''}
          ></PostEditPageTag>
          <PostEditPageTag
            {...TagProps}
            children={'돈'}
            id={CHANNEL_ID.MONEY}
            className={CHANNEL_ID.MONEY == active ? 'active' : ''}
          ></PostEditPageTag>
        </PostEditPageTagWrapper>
        <PostEditPageHorizontalLine
          marginTop={'16px'}
        ></PostEditPageHorizontalLine>
        <PostEditPageHeading marginBottom={'6px'}>본문</PostEditPageHeading>
        <PostEditPageTextarea
          {...TextareaProps}
          value={text}
          overFlow={'scroll'}
          onChange={(e: MouseEvent<HTMLTextAreaElement>) =>
            setText((e.target as HTMLTextAreaElement).value)
          }
          placeholder="내용을 작성해주세요"
          backgroundColor={'#e4ecfe'}
        ></PostEditPageTextarea>
      </PostEditPageMainWrapper>
    </PostEditPageWrapper>
  );
};

export default PostEditPage;

const PostEditPageTag = styled(Tag)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: none;

  margin-right: 5px;

  background: linear-gradient(
    45deg,
    rgba(252, 203, 243, 0.2),
    rgba(232, 203, 244, 0.2),
    rgba(182, 204, 249, 0.2),
    rgba(114, 205, 255, 0.2)
  );

  overflow: hidden;
  white-space: nowrap;
  font-family: GangwonEdu_OTFBoldA;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 0.7rem;
`;

interface PostEditPageTextareaProps {
  backgroundColor: string;
}

const PostEditPageTextarea = styled(Textarea)<PostEditPageTextareaProps>`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: GangwonEdu_OTFBoldA;
  box-sizing: border-box;
  padding-top: 6px;
  padding-left: 12px;
  caret-color: #2f2f68;
  ::placeholder {
    color: #8b9dc6;
    font-family: GangwonEdu_OTFBoldA;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const PostEditPageMainWrapper = styled.div`
  max-width: 425px;
  min-height: 500px;
  position: relative;
  top: 25px;
  margin: 0 auto;
  width: calc(100% - 20px);
  height: calc(100vh - 250px);
  background-color: #f5f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: content-box;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgba(245, 249, 255, 0.1);
`;

const PostEditPageTagWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: flex-start;
`;

interface PostEditPageHeadingProps {
  marginBottom: string;
}

const PostEditPageHeading = styled('h1')<PostEditPageHeadingProps>`
  font-family: GangwonEdu_OTFBoldA;
  width: calc(100% - 40px);
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

interface PostEditPageHorizontalLineProps {
  marginTop: string;
}

const PostEditPageHorizontalLine = styled(
  'div'
)<PostEditPageHorizontalLineProps>`
  position: relative;
  margin: 0 auto;
  width: calc(100% - 20px);
  height: 1px;
  background-color: #bbcdf7;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 16px;
`;
