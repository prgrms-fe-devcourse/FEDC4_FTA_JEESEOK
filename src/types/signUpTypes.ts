export interface SignUpStateType {
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

export type inputType = 'id' | 'pw' | 'nickName' | 'pwCheck';
