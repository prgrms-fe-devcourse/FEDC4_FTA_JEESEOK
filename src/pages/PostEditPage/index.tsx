import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAuthorizationCheckApi } from '~/api/authorization';
import Button from '~/pages/PostEditPage/Button';
import Header from '~/pages/PostEditPage/Header';
import Tag from '~/pages/PostEditPage/Tag';
import Textarea from '~/pages/PostEditPage/Textarea';
import { editPost, readPost, writePost } from '~/pages/PostEditPage/post';

const CHANNEL_ID = {
  WORK: ' 64f57dc874128417c268916c',
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
  const [title, setTitle] = useState('제목');
  const [text, setText] = useState('');
  const [active, setActive] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');

  useEffect(() => {
    const getAuthCheck = async () => {
      const isAuth = await getAuthorizationCheckApi();
      console.log(isAuth);
      //만약 error나면 어떻게 처리할거임
      if (typeof isAuth === 'string') {
        navigate('/');
      }
      if (typeof postId === 'string' && postId !== 'create') {
        const dummy = window.localStorage.getItem('dummy') as string;
        setTitle(JSON.parse(dummy).title);
        setText(JSON.parse(dummy).body);
        //setText(JSON.parse(readPost(postId)));
      }
    };
    getAuthCheck();
  }, [navigate]);

  function handleSubmit(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title === '') {
      alert('제목을 적어주세요');
    } else if (text === '') {
      alert('글 내용이 필요합니다');
    } else if (selectedChannel === '') {
      alert('태그를 선택해주세요');
    } else if (postId === 'create') {
      // writePost(
      //   JSON.stringify({ title: title, body: text }),
      //   null,
      //   selectedChannel
      // );
      window.localStorage.setItem(
        'dummy',
        JSON.stringify({ title: title, body: text, channelId: selectedChannel })
      );
      //navigate('/');
    } else if (typeof postId === 'string') {
      // editPost({
      //   postId,
      //   title: JSON.stringify({ title: title, body: text }),
      //   channelId: selectedChannel,
      // });
      window.localStorage.setItem(
        'dummy',
        JSON.stringify({ title: title, body: text, channelId: selectedChannel })
      );
      //navigate('/');
    }
  }

  const TagProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setActive((e.target as HTMLButtonElement).id);
      setSelectedChannel((e.target as HTMLButtonElement).id);
      console.log('selectedChannel : ', selectedChannel);
      console.log((e.target as HTMLButtonElement).innerText);
    },
    width: '60px',
    height: '30px',
    fontColor: '000000',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    borderWidth: '10px',
    borderColor: '000000',
    fontSize: '12px',
    disabled: false,
    isLoading: false,
    activeBackgroundColor: 'gray',
  };

  const TextareaProps = {
    width: '400px',
    height: '400px',
    borderRadius: '0px',
    fontSize: '16px',
    scrollBarThumbColor: 'gray',
    scrollBarWidth: 1,
  };

  const ButtonProps = {
    children: 'Save',
    className: 'submitButton',
    disabled: false,
    onClick: () => {},
    isLoading: false,
    fontSize: '14px',
    fontWeight: '400',
    width: '40px',
    height: '20px',
  };

  return (
    <PostEditPageWrapper>
      <Header
        isLogo={false}
        isSearch={false}
        isButton={true}
        title={'게시글 작성'}
        buttonChildNode={
          <Button {...ButtonProps} type="submit" form="editPost"></Button>
        }
      ></Header>

      <form onSubmit={handleSubmit} id="editPost">
        <Textarea
          {...TextareaProps}
          value={title}
          height={'30px'}
          fontSize="20px"
          overFlow="hidden"
          onChange={(e: MouseEvent<HTMLTextAreaElement>) =>
            setTitle((e.target as HTMLTextAreaElement).value)
          }
        ></Textarea>
        <Tag
          {...TagProps}
          children={'연애'}
          id={CHANNEL_ID.LOVE}
          className={CHANNEL_ID.LOVE == active ? 'active' : ''}
        ></Tag>
        <Tag
          {...TagProps}
          children={'취업'}
          id={CHANNEL_ID.WORK}
          className={CHANNEL_ID.WORK == active ? 'active' : ''}
        ></Tag>
        <Tag
          {...TagProps}
          children={'인간관계'}
          id={CHANNEL_ID.RELATION}
          className={CHANNEL_ID.RELATION == active ? 'active' : ''}
        ></Tag>
        <Tag
          {...TagProps}
          children={'금전'}
          id={CHANNEL_ID.MONEY}
          className={CHANNEL_ID.MONEY == active ? 'active' : ''}
        ></Tag>
        <Textarea
          {...TextareaProps}
          value={text}
          overFlow={'scroll'}
          onChange={(e: MouseEvent<HTMLTextAreaElement>) =>
            setText((e.target as HTMLTextAreaElement).value)
          }
        ></Textarea>
      </form>
    </PostEditPageWrapper>
  );
};

export default PostEditPage;
