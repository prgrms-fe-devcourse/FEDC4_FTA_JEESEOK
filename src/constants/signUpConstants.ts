export const TITLE = '회원가입';
export const InitSignUpState = {
  id: '',
  isIdError: false,
  pw: '',
  isPwError: false,
  pwCheck: '',
  isPwCheckError: false,
  nickName: '',
  isNickNameError: false,
  fullName: {
    mbti: [],
    introduce: '',
  },
};

export const USER_ID = 'ID';
export const PASSWORD = '비밀번호 입력';
export const PASSWORD_CHECK = 'PW 확인';
export const NICK_NAME = '닉네임';
export const USER_ID_VALIDATION =
  '아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
export const PASSWORD_VALIDATION = '영어 + 숫자포함 8자 이상 입력해 주세요';
export const PASSWORD_CHECK_VALIDATION = '비밀번호가 일치하지 않습니다.';
export const NICK_NAME_VALIDATION =
  '닉네임: 2글자 이상 8글자 미만 입력해 주세요';
