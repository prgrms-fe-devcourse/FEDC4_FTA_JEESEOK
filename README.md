# FEDC4_FTA_JEESEOK

지석팀 팀프로젝트 브랜치 입니다.

## 코드 작성 규칙

- 파일명 : camelCase
- 컴포넌트 파일명 : PascalCase
- 함수명 - 동사 + 명사 : camelCase
- 변수명 : camelCase
- 타입 : 객체의 경우 가능하다면 인터페이스로 사용
- 함수 : 인터페이스로 타입 분리, 화살표 함수 사용
- 상수 : 대문자 snake_case(SNAKE_CASE)
- 스타일드 컴포넌트 : 폴더안에 style.ts로 따로 분리

## Commit Message

| 타입     | 설명                                                               |
| -------- | ------------------------------------------------------------------ |
| feat     | 새로운 기능 추가 <br/> 사용자 입장에서 변화가 있는 경우            |
| fix      | 버그 수정                                                          |
| docs     | 문서 수정 (ex. README.md 수정)                                     |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                  |
| refactor | 사용자 입장에서 변화가 없는 코드 <br/> 파일명, 폴더명 변경 및 이동 |
| chore    | 빌드 업무 수정, 패키지 매니저 수정, 주석                           |
| design   | 사용자 UI 디자인 변경 (CSS 등)                                     |

```bash
feat: #1 xxx 기능 추가
fix: #2 xxx 기능 수정
docs: #3 xxx 문서 수정
style: #4 xxx 코드 수정
refactor: #5 xxx 기능 수정
chore: #6 xxx 버전 수정
design: #7 xxx 페이지 수정
```

## 브랜치 전략

`main`: 운영환경 브랜치

`dev`: 개발환경 브랜치

`feature`: 파트별 기능 브랜치

### 브랜치 명명

`feat/#이슈번호_길어진_기능명`

ex) `feat/#11_button_test`

**_브랜치는 머지하면 삭제_**

## 폴더 구조

```bash
├── public
│   ├── favicon.ico
├── src
│   ├── components
│   │   ├── common
│   │   │   ├── index.ts
│   │   │   ├── button
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.tsx
│   │   │   ├── input
│   │   │   └── ...
│   │   ├── 페이지명(페이지에서만 사용할 컴포넌트)
│   ├── routes
│   │   ├── index.tsx
│   ├── types
│   │   ├── index.ts
│   ├── constants
│   │   ├── index.ts
│   │   ├── common.ts
│   │   └── 페이지별 상수.ts
│   ├── pages
│   │   ├── 로그인.tsx
│   │   ├── 게시판.tsx
│   │   ├── 마이페이지.tsx
│   │   └── ...
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useXXX.ts
│   ├── api
│   │   ├── base
│   │   ├── common
│   │   ├── 페이지명
│   │   └── ...
│   ├── assets
│   │   ├── 이미지
│   │   └── 폰트
```
