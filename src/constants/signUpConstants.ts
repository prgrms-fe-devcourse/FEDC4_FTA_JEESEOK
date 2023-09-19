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
export const PASSWORD_CHECK = '비밀번호 확인';
export const NICK_NAME = '닉네임';
export const USER_ID_VALIDATION =
  '아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
export const PASSWORD_VALIDATION = '영어 + 숫자포함 8자 이상 입력해 주세요';
export const PASSWORD_CHECK_VALIDATION = '비밀번호가 일치하지 않습니다.';
export const NICK_NAME_VALIDATION =
  '닉네임: 2글자 이상 8글자 미만 입력해 주세요';

export const MBTI_TITLE = 'MBTI 고르기';

export const INIT_MBTI_STYLE = {
  E: {
    default: 'linear-gradient(50deg, #E6D1F7 22.09%, #DDDAF6 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  N: {
    default:
      'linear-gradient(50deg, #E0DBF7 22.09%, #D6DAF7 74.48%, #D2DAF8 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  F: {
    default:
      'linear-gradient(50deg, #D7DBF8 22.09%, #CDDAF8 65.52%, #C5DAF9 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  P: {
    default:
      'linear-gradient(50deg, #CCDCF9 22.09%, #C2DCF9 69.51%, #BCDCFA 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  I: {
    default: 'linear-gradient(50deg, #E6D1F7 22.09%, #DDDAF6 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  S: {
    default:
      'linear-gradient(50deg, #E0DBF7 22.09%, #D6DAF7 74.48%, #D2DAF8 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  T: {
    default:
      'linear-gradient(50deg, #D7DBF8 22.09%, #CDDAF8 65.52%, #C5DAF9 92.75%)',
    isSelect: false,
    select: '#E6EFFF',
  },
  J: {
    default:
      'linear-gradient(50deg, #CCDCF9 22.09%, #C2DCF9 69.51%, #BCDCFA 92.75%);',
    isSelect: false,
    select: '#E6EFFF',
  },
};
