import React, { useState } from 'react';
import Button from '~/components/common/Button';
import {
  MbtiContainer,
  MbtiTitle,
} from '~/components/signup/MbtiButton/mbtiStyle.ts';
import { INIT_MBTI_STYLE, MBTI_TITLE } from '~/constants/signUpConstants.ts';

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
type MbtiKey = 'E' | 'N' | 'F' | 'P' | 'I' | 'S' | 'T' | 'J';

const MbtiButton = ({ setSignUpState }: MbtiButtonProps) => {
  const [mbtiStyle, setMbtiStyle] = useState(INIT_MBTI_STYLE);
  const mbtiArr: MbtiKey[] = ['E', 'N', 'F', 'P', 'I', 'S', 'T', 'J'];

  const handleMbtiChange = (item: MbtiKey) => {
    const isSelect = !mbtiStyle[item].isSelect;

    setMbtiStyle((prevState) => ({
      ...prevState,
      [item]: {
        ...prevState[item],
        isSelect: isSelect,
      },
    }));

    setSignUpState((prevState: SignUpStateType) => {
      const newMbti = [...prevState.fullName.mbti]; // 현재 mbti 값을 복사

      if (isSelect) {
        if (['E', 'I'].includes(item)) newMbti[0] = item;
        else if (['N', 'S'].includes(item)) newMbti[1] = item;
        else if (['F', 'T'].includes(item)) newMbti[2] = item;
        else if (['P', 'J'].includes(item)) newMbti[3] = item;
      } else {
        if (['E', 'I'].includes(item)) newMbti[0] = '';
        else if (['N', 'S'].includes(item)) newMbti[1] = '';
        else if (['F', 'T'].includes(item)) newMbti[2] = '';
        else if (['P', 'J'].includes(item)) newMbti[3] = '';
      }

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
      <MbtiTitle>{MBTI_TITLE}</MbtiTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mbtiArr.map((item, index) => (
          <div key={index} style={{ flex: '1 1 20%', padding: '5px' }}>
            <Button
              width={'90%'}
              height={51}
              onClick={() => handleMbtiChange(item)}
              background={
                mbtiStyle[item].isSelect
                  ? mbtiStyle[item].select
                  : mbtiStyle[item].default
              }
              radius={'10px'}
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
