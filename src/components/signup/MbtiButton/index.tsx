import React from 'react';
import Button from '~/components/common/Button';
import {
  MbtiContainer,
  MbtiTitle,
} from '~/components/signup/MbtiButton/mbtiStyle.ts';

interface MbtiButtonProps {
  setSignUpState: React.Dispatch<React.SetStateAction<SignUpStateType>>;
}

interface SignUpStateType {
  id: string;
  pw: string;
  pwCheck: string;
  nickName: string;
  fullName: {
    mbti: string[];
    introduce: string;
  };
  isIdError: boolean;
  isPwError: boolean;
  isPwCheckError: boolean;
  isNickNameError: boolean;
}

const MbtiButton = ({ setSignUpState }: MbtiButtonProps) => {
  const mbtiArr = ['E', 'N', 'F', 'P', 'I', 'S', 'T', 'J'];

  const handleMbtiChange = (item: string) => {
    setSignUpState((prevState: SignUpStateType) => {
      const newMbti = [...prevState.fullName.mbti]; // 현재 mbti 값을 복사

      if (['E', 'I'].includes(item)) newMbti[0] = item;
      else if (['N', 'S'].includes(item)) newMbti[1] = item;
      else if (['F', 'T'].includes(item)) newMbti[2] = item;
      else if (['P', 'J'].includes(item)) newMbti[3] = item;

      return {
        ...prevState,
        fullName: {
          ...prevState.fullName,
          mbti: newMbti,
        },
      };
    });
  };

  return (
    <MbtiContainer>
      <MbtiTitle>mbti</MbtiTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mbtiArr.map((item, index) => (
          <div key={index} style={{ flex: '1 1 20%', padding: '5px' }}>
            <Button
              width={'90%'}
              height={40}
              onClick={() => handleMbtiChange(item)}
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
    </MbtiContainer>
  );
};

export default MbtiButton;
