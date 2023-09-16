import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { putMyInformation } from '~/api/settings';
import { getUser, postUserImage } from '~/api/user';
import UserPhoto from '~/assets/user.svg';
import Button from '~/components/common/Button';
import Image from '~/components/common/Image';
import Input from '~/components/common/Input';
import Header from '~/pages/UserEditPage/Header';
import Textarea from '~/pages/UserEditPage/Textarea';
import { MainPageContainer, MbtiForm } from '~/pages/UserEditPage/style';
import { User } from '~/types';

const UserEditPage = () => {
  const navigate = useNavigate();
  const info = localStorage.getItem('AUTH_TOKEN');

  const { user, token } = JSON.parse(info!);
  const { fullName, username, _id } = user;
  const { mbti, introduce } = JSON.parse(fullName);

  useEffect(() => {
    const getUserImage = async (): Promise<void> => {
      const data = await getUser(_id);

      if ('image' in data) {
        const { image } = data;

        return setEditedImage(image as string);
      }
    };

    getUserImage();
  }, [_id]);

  const [editedMbti, setEditedMbti] = useState(mbti);
  const [editedIntroduce, setEditedIntroduce] = useState(introduce);
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedImage, setEditedImage] = useState<string | null>(null);

  const MBTI = ['E', 'N', 'F', 'P', 'I', 'S', 'T', 'J'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUsername(e.currentTarget.value);
  };

  const handleInputCancelButtonClick = () => {
    setEditedUsername('');
  };

  const handleMbtiButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(editedMbti);
    if (editedMbti.length < 4) {
      setEditedMbti(editedMbti + e.currentTarget.textContent);
    }
  };

  const handleMbtiCancelClick = () => {
    setEditedMbti('');
  };

  const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setEditedIntroduce(e.currentTarget.value);
  };

  const handleChangePasswordButtonClick = () => {
    navigate('/user/edit/password');
  };

  const handleImageUploadButtonClick = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const { image } = (await postUserImage(file)) as unknown as User;

      setEditedImage(image);
    }
  };

  const handlePlusButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click();
  };

  const handleCompleteEditButton = async () => {
    if (
      editedMbti.length !== 4 ||
      (editedMbti[0] !== 'I' && editedMbti[0] !== 'E') ||
      (editedMbti[1] !== 'S' && editedMbti[1] !== 'N') ||
      (editedMbti[2] !== 'T' && editedMbti[2] !== 'F') ||
      (editedMbti[3] !== 'P' && editedMbti[3] !== 'J')
    ) {
      alert('MBTI를 다시 입력해 주세요');
      setEditedMbti('');

      return;
    }
    const fullName = { mbti: editedMbti, introduce: editedIntroduce };

    const editedUserInfo = (await putMyInformation(
      JSON.stringify(fullName),
      editedUsername
    )) as unknown as User;

    editedUserInfo.image = editedImage as string;

    localStorage.setItem(
      'AUTH_TOKEN',
      JSON.stringify({ user: editedUserInfo, token })
    );

    // navigate(-1);
  };

  return (
    <>
      <Header
        isLogo={false}
        title={'내 정보 수정'}
        onClick={handleCompleteEditButton}
      />
      <MainPageContainer>
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <label htmlFor="fileInput">
            <Image
              src={editedImage ? editedImage : UserPhoto}
              shape={'circle'}
              width={150}
              height={150}
              mode={'cover'}
              style={{ backgroundColor: '#DFE7FF' }}
            />
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleImageUploadButtonClick}
            style={{ display: 'none' }}
          />
          <button
            onClick={handlePlusButtonClick}
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              left: '110px',
              width: '40px',
              height: '40px',
              background: 'skyblue',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            +
          </button>
        </div>
        <Input
          id={'username'}
          value={editedUsername}
          width={'65%'}
          height={40}
          placeHolder={'닉네임'}
          type={'text'}
          onChange={handleInputChange}
          onClick={handleInputCancelButtonClick}
        />
        <span>
          mbti: {editedMbti}
          <button onClick={handleMbtiCancelClick}>x</button>
        </span>
        <span
          style={
            editedMbti.length === 4 &&
            (editedMbti[0] === 'I' || editedMbti[0] === 'E') &&
            (editedMbti[1] === 'S' || editedMbti[1] === 'N') &&
            (editedMbti[2] === 'T' || editedMbti[2] === 'F') &&
            (editedMbti[3] === 'P' || editedMbti[3] === 'J')
              ? { display: 'none' }
              : { color: 'red', fontSize: '10px' }
          }
        >
          유효하지 않은 MBTI입니다.
        </span>
        <MbtiForm>
          {MBTI.map((alphabet, index) => (
            <Button
              children={alphabet}
              width={50}
              height={50}
              key={index}
              onClick={handleMbtiButtonClick}
            />
          ))}
        </MbtiForm>
        <Textarea
          value={editedIntroduce}
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
        <Button
          children={'비밀번호 변경'}
          width={95}
          height={30}
          onClick={handleChangePasswordButtonClick}
        />
      </MainPageContainer>
    </>
  );
};

export default UserEditPage;
