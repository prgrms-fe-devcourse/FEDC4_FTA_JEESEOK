# FEDC4_FTA_JEESEOK
지석팀 팀프로젝트 브랜치 입니다.

## 진행 순서

1. 칸반 → todo를 작성
2. 칸반 → progess 옮김
3. 코드 작성
4. commit
5. push → feature 브랜치
6. PR → 기능별로, 1명
7. 칸반 → done으로 옮김

## Commit Message

`feat` : 새로운 기능 추가

`fix` : 버그 수정

`docs` : 문서 수정 (ex. README.md 수정)

`style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

`refactor` : 코드 리펙토링

`chore` : 빌드 업무 수정, 패키지 매니저 수정

`design` : 사용자 UI 디자인 변경 (CSS 등)

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

## 폴더 구조

```bash
src
├── components
│   ├── common
│   │   ├── index.ts
│   │   ├── button
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── input
│   │   └── ...
│   ├── 페이지명(페이지에서만 사용할 컴포넌트)
├── routes
│   ├── index.tsx
├── types
│   ├── index.ts
├── constants
│   ├── index.ts
│   ├── common.ts
│   └── 페이지별 상수.ts
├── pages
│   ├── 로그인.tsx
│   ├── 게시판.tsx
│   ├── 마이페이지.tsx
│   └── ...
├── hooks
│   ├── index.ts
│   ├── useXXX.ts
├── api
│   ├── base
│   ├── common
│   ├── 페이지명
│   └── ...
├── assets
│   ├── 이미지
│   └── 폰트
```
