import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { putMyInformation } from '~/api/settings';
import { getUser, postUserImage } from '~/api/user';
import UserPhoto from '~/assets/default_profile.svg';
import Header from '~/components/common/Header';
import Image from '~/components/common/Image';
import Button from '~/pages/UserEditPage/Button';
import Input from '~/pages/UserEditPage/Input';
import Textarea from '~/pages/UserEditPage/Textarea';
import plus from '~/pages/UserEditPage/assets/plus.svg';
import {
  EditPageContainer,
  EditPasswordButtonContainer,
  ImageContainer,
  InputContainer,
  MainPageContainer,
  MbtiForm,
  MbtiIntroduceSpanContainer,
  TextareaContainer,
  UploadImageButton,
} from '~/pages/UserEditPage/style';
import { User } from '~/types';

const UserEditPage = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('AUTH_TOKEN');

  const { user, token } = JSON.parse(userInfo!);
  const { fullName, username, _id } = user;
  const { mbti, introduce } = JSON.parse(fullName);
  // 새로고침 시 아직 이미지 url이 localStorage에 저장되지 않아 이전 사진이 불러와짐
  // localStorage의 사진 url을 저장하는 로직을 완료 버튼을 눌렀을때만 수행하기 위해서는 이 로직이 필요함
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

  const MBTIButtons = MBTI.map((alphabet, index) => {
    const isActive = editedMbti.includes(alphabet);
    const buttonStyle = {
      width: '55px',
      height: '55px',
      borderRadius: '10px',
      background: isActive
        ? alphabet === 'I' || alphabet === 'E'
          ? 'linear-gradient(45deg, #E6D1F7, #DDDAF6)'
          : alphabet === 'S' || alphabet === 'N'
          ? 'linear-gradient(45deg, #E0DBF7, #D6DAF7,#D2DAF8)'
          : alphabet === 'T' || alphabet === 'F'
          ? 'linear-gradient(45deg, #D7DBF8, #CDDAF8,#C5DAF9)'
          : alphabet === 'P' || alphabet === 'J'
          ? 'linear-gradient(45deg, #CCDCF9, #C2DCF9,#BCDCFA)'
          : ''
        : '#E6EFFF',
      color: '#FFFFFF',
    };

    const handleMbtiButtonClick = () => {
      if (alphabet === 'E' || alphabet === 'I') {
        setEditedMbti(editedMbti.replace(editedMbti[0], alphabet));
      } else if (alphabet === 'N' || alphabet === 'S') {
        setEditedMbti(editedMbti.replace(editedMbti[1], alphabet));
      } else if (alphabet === 'F' || alphabet === 'T') {
        setEditedMbti(editedMbti.replace(editedMbti[2], alphabet));
      } else if (alphabet === 'P' || alphabet === 'J') {
        setEditedMbti(editedMbti.replace(editedMbti[3], alphabet));
      }
    };

    return (
      <Button
        children={alphabet}
        width={55}
        height={55}
        key={index}
        onClick={handleMbtiButtonClick}
        style={buttonStyle}
      />
    );
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUsername(e.currentTarget.value);
  };

  const handleInputCancelButtonClick = () => {
    setEditedUsername('');
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

      setEditedImage(image || '');
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

    navigate(-1);
  };

  return (
    <EditPageContainer>
      <Header
        isLogo={false}
        title={'내 정보 수정'}
        isSave={true}
        handleSaveButtonClick={handleCompleteEditButton}
      />
      <MainPageContainer>
        <ImageContainer>
          <label htmlFor="fileInput">
            <Image
              src={editedImage ? editedImage : UserPhoto}
              shape={'circle'}
              width={110}
              height={110}
              mode={'cover'}
              style={{ backgroundColor: '#D9E4FB', cursor: 'pointer' }}
            />
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleImageUploadButtonClick}
            style={{ display: 'none' }}
          />
          <UploadImageButton onClick={handlePlusButtonClick}>
            <img src={plus} />
          </UploadImageButton>
        </ImageContainer>

        <InputContainer>
          <Input
            id={'username'}
            value={editedUsername}
            width={'100%'}
            height={'100%'}
            placeHolder={'닉네임'}
            background={'#E4ECFE'}
            type={'text'}
            border={'none'}
            onChange={handleInputChange}
            onClick={handleInputCancelButtonClick}
          />
        </InputContainer>

        <MbtiIntroduceSpanContainer>
          <span>나의 MBTI</span>
        </MbtiIntroduceSpanContainer>

        <MbtiForm>{MBTIButtons}</MbtiForm>

        <MbtiIntroduceSpanContainer>
          <span>자기소개</span>
        </MbtiIntroduceSpanContainer>

        <TextareaContainer>
          <Textarea
            value={editedIntroduce || ''}
            width={'90%'}
            height={'100%'}
            borderRadius={'10px'}
            fontSize={'16px'}
            scrollBarWidth={4}
            scrollBarThumbColor={'#FFFFFF'}
            style={{
              boxSizing: 'border-box',
              border: 'none',
              backgroundColor: '#E4ECFE',
              color: '#2F2F68',
              fontFamily: 'GangwonEdu_OTFBoldA',
              padding: '10px',
            }}
            placeholder={'자기소개'}
            onChange={handleTextareaChange}
          />
        </TextareaContainer>

        <EditPasswordButtonContainer>
          <Button
            children={'비밀번호 변경'}
            width={130}
            height={25}
            onClick={handleChangePasswordButtonClick}
            style={{
              color: '#2F2F68',
              fontSize: '12px',
              backgroundColor: '#E4ECFE',
              borderRadius: '10px',
            }}
          />
        </EditPasswordButtonContainer>
      </MainPageContainer>
    </EditPageContainer>
  );
};

export default UserEditPage;
