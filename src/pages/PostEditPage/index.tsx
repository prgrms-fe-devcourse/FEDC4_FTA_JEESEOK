import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { editPost, readPost, writePost } from '~/api/post';
import Header from '~/components/common/Header';
import Loading from '~/components/common/Loading';
import Modal from '~/components/common/Modal';
import { CHANNEL_ID } from '~/constants/channelId';
import {
  PostEditPageHeading,
  PostEditPageHorizontalLine,
  PostEditPageInput,
  PostEditPageMainWrapper,
  PostEditPageTag,
  PostEditPageTagWrapper,
  PostEditPageTextarea,
  PostEditPageWrapper,
} from '~/pages/PostEditPage/PostEditPageStyle.ts';

const PostEditPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [active, setActive] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');
  const [modalState, setModalState] = useState(false);
  const [messageState, setMessageState] = useState('');
  const [loading, setLoading] = useState(false);

  scrollTo(0, 0);

  useEffect(() => {
    const getAuthCheck = async () => {
      setLoading(true);
      const isAuth = await getAuthorizationCheckApi();

      if (!isAuth) {
        navigate('/');
        setLoading(false);
        return;
      }

      if (postId === 'create') {
        setTitle('');
        setLoading(false);
        return;
      }

      if (typeof postId === 'string') {
        const postData = await readPost(postId);
        if (postData && postData.author.email === isAuth.email) {
          const postInformation = JSON.parse(postData.title);
          setTitle(postInformation.title);
          setText(postInformation.body);
          setLoading(false);
          return;
        }
        setLoading(false);
        navigate('/');
      }
    };

    getAuthCheck();
  }, [navigate, postId]);

  const invokeModal = (message: string) => {
    setMessageState(message);
    setModalState(true);
  };

  function handleSubmit() {
    if (title === '') {
      invokeModal('제목을 적어주세요.');
    } else if (selectedChannel === '') {
      invokeModal('태그를 선택해주세요.');
    } else if (text === '') {
      invokeModal('본문을 적어주세요.');
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
      {loading ? (
        <Loading isLoading />
      ) : (
        <>
          <Header
            isLogo={false}
            isSearch={false}
            isSave={true}
            title={'게시글 작성'}
            handleSaveButtonClick={() => handleSubmit()}
          ></Header>
          <PostEditPageMainWrapper>
            <PostEditPageHeading marginBottom={'6px'}>제목</PostEditPageHeading>
            <PostEditPageInput
              value={title}
              placeholder={'제목을 작성해 주세요'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle((e.target as HTMLInputElement).value);
              }}
            />
            <PostEditPageHorizontalLine
              marginTop={'8px'}
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
                id={CHANNEL_ID.JOB}
                className={CHANNEL_ID.JOB == active ? 'active' : ''}
              ></PostEditPageTag>
              <PostEditPageTag
                {...TagProps}
                children={'인간관계'}
                id={CHANNEL_ID.RELATIONSHIP}
                className={CHANNEL_ID.RELATIONSHIP == active ? 'active' : ''}
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
          {modalState && (
            <Modal handleCloseButtonClick={() => setModalState(false)}>
              {messageState}
            </Modal>
          )}{' '}
        </>
      )}
    </PostEditPageWrapper>
  );
};

export default PostEditPage;
