import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { putMyInformation } from '~/api/settings';
import UserPhoto from '~/assets/user.svg';
import Button from '~/components/common/Button';
import Image from '~/components/common/Image';
import Input from '~/components/common/Input';
import Header from '~/pages/UserEditPage/Header';
import Textarea from '~/pages/UserEditPage/Textarea';
import { MainPageContainer, MbtiForm } from '~/pages/UserEditPage/style';
import { User } from '~/types';

/* 라우터 주소 변경해서 edit하는 사용자의 Id값을 이용해서 
사용자의 fullName(자기소개, mbti) username(닉네임) image(프로필 사진)을 
가지고 와서 사용해야 함 !! **/
const UserEditPage = () => {
  const [UserInfo, setUserInfo] = useState({
    fullName: '',
    username: '',
    image: '',
  });

  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const [editMbti, setEditMbti] = useState('');
  const [validMbti, setValidMbti] = useState(true);

  const [textareaValue, setTextareaValue] = useState('');
  const [debouncedTextareaValue, setDebouncedTextareaValue] = useState('');

  const [editUserInfo, setEditUserInfo] = useState({
    mbti: '',
    introduce: '',
    username: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getMyUserInfo = async () => {
      const user = (await getAuthorizationCheckApi()) as unknown as
        | User
        | false;

      if (user) {
        const { fullName, username, image } = user;
        const { mbti, introduce } = JSON.parse(fullName);

        setUserInfo({ mbti, introduce, username, image });
      }
    };

    getMyUserInfo();
  }, []);

  useEffect(() => {
    const delayInput = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 1000);

    const delayTextarea = setTimeout(() => {
      setDebouncedTextareaValue(textareaValue);
    }, 1000);

    return () => {
      clearTimeout(delayInput);
      clearTimeout(delayTextarea);
    };
  }, [inputValue, textareaValue]);

  useEffect(() => {
    setEditUserInfo(() => ({
      mbti: editMbti,
      introduce: debouncedTextareaValue,
      username: debouncedInputValue,
    }));
    if (
      editMbti.length !== 4 ||
      (editMbti[0] !== 'I' && editMbti[0] !== 'E') ||
      (editMbti[1] !== 'S' && editMbti[1] !== 'N') ||
      (editMbti[2] !== 'T' && editMbti[2] !== 'F') ||
      (editMbti[3] !== 'P' && editMbti[3] !== 'J')
    ) {
      if (editMbti.length !== 0) {
        setValidMbti(false);
      }
    } else {
      setValidMbti(true);
    }
  }, [editMbti, debouncedInputValue, debouncedTextareaValue]);

  const MBTI = ['E', 'N', 'F', 'P', 'I', 'S', 'T', 'J'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleCancelButtonClick = () => {
    setInputValue('');
  };

  const handleMbtiButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditMbti(editMbti + e.currentTarget.textContent);
  };

  const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.currentTarget.value);
  };

  const handlePasswordClick = () => {
    navigate('/user/edit/password');
  };

  const handleCompleteEditButton = async () => {
    const { mbti, introduce, username } = editUserInfo;

    if (
      mbti.length !== 4 ||
      (mbti[0] !== 'I' && mbti[0] !== 'E') ||
      (mbti[1] !== 'S' && mbti[1] !== 'N') ||
      (mbti[2] !== 'T' && mbti[2] !== 'F') ||
      (mbti[3] !== 'P' && mbti[3] !== 'J')
    ) {
      setEditMbti('');

      return;
    }
    const fullName = { mbti, introduce };

    await putMyInformation(JSON.stringify(fullName), username);
    navigate(-1);
  };

  const handleMbtiCancel = () => {
    setEditMbti('');
  };

  return (
    <>
      <Header
        isLogo={false}
        title={'내 정보 수정'}
        onClick={handleCompleteEditButton}
      />
      <MainPageContainer>
        <Image
          src={UserPhoto}
          shape={'circle'}
          width={150}
          height={150}
          mode={'cover'}
          style={{ backgroundColor: '#DFE7FF' }}
        />
        <Input
          id={''}
          value={inputValue}
          width={'65%'}
          height={40}
          placeHolder={'닉네임'}
          type={'text'}
          onChange={handleInputChange}
          onClick={handleCancelButtonClick}
        />
        <span>
          mbti: {editUserInfo.mbti}
          <button onClick={handleMbtiCancel}>x</button>
        </span>
        <span
          style={
            validMbti ? { display: 'none' } : { color: 'red', fontSize: '12px' }
          }
        >
          유효하지 않은 mbti입니다.
        </span>
        <MbtiForm>
          {MBTI.map((alphabet, index) => (
            <Button
              width={50}
              height={50}
              key={index}
              onClick={handleMbtiButtonClick}
            >
              {alphabet}
            </Button>
          ))}
        </MbtiForm>
        <Textarea
          value={textareaValue}
          width={'65%'}
          height={'150px'}
          text={''}
          borderRadius={'10px'}
          fontSize={'14px'}
          scrollBarWidth={0}
          scrollBarThumbColor={''}
          style={{ padding: '10px', boxSizing: 'border-box' }}
          placeholder={'자기소개'}
          onChange={handleTextareaChange}
        />
        <Button width={95} height={30} onClick={handlePasswordClick}>
          비밀번호 변경
        </Button>
      </MainPageContainer>
    </>
  );
};

export default UserEditPage;
