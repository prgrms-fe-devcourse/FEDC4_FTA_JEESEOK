import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogoutApi } from '~/api/authorization';
import { deletePost } from '~/api/post';
import logoImg from '~/assets/mainLogo.svg';
import {
  BackIcon,
  CorrectButton,
  DeleteButton,
  EditWrapper,
  HeaderBackground,
  HeaderContainer,
  LogoIcon,
  LogoTitle,
  LogoWrapper,
  LogoutButton,
  MainTitle,
  SaveButton,
  SearchIcon,
  Separator,
} from '~/components/common/Header/headerStyle.ts';
import Modal from '../Modal';
import backButtonImg from './back.svg';
import search from './search.svg';

interface HeaderProps {
  isLogo: boolean;
  isSearch: boolean;
  title: string;
  isLogout: boolean;
  isSave: boolean;
  isEdit: boolean;
  handleSaveButtonClick: () => void;
}

const Header = ({
  isLogo = true,
  isSearch = false,
  title,
  isLogout = false,
  isSave = false,
  isEdit = false,
  handleSaveButtonClick,
}: Partial<HeaderProps>) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleSearchButtonClick = () => {
    navigate('/search');
  };

  const handleLogoutButtonClick = () => {
    postLogoutApi();
    localStorage.removeItem('AUTH_TOKEN');
    navigate('/');
  };

  const handleCorrectButtonClick = () => {
    const urlParams = new URL(location.href);
    const postId = urlParams.pathname.split('/')[2];
    navigate(`/post/${postId}/edit`);
  };

  const handleDeleteButtonClick = () => {
    const urlParams = new URL(location.href);
    const postId = urlParams.pathname.split('/')[2];

    deletePost(postId);
    navigate(-1);
  };

  return (
    <>
      <HeaderBackground>
        <HeaderContainer>
          {isLogo ? (
            <LogoWrapper onClick={handleLogoClick}>
              <LogoIcon src={logoImg} />
              <LogoTitle>FTA</LogoTitle>
            </LogoWrapper>
          ) : (
            <BackIcon src={backButtonImg} onClick={handleBackButtonClick} />
          )}
          <MainTitle>{title}</MainTitle>
          <SearchIcon
            isHidden={isSearch}
            src={search}
            onClick={handleSearchButtonClick}
          />
          <LogoutButton isHidden={isLogout} onClick={handleLogoutButtonClick}>
            로그아웃
          </LogoutButton>
          <SaveButton isHidden={isSave} onClick={handleSaveButtonClick}>
            저장
          </SaveButton>
          <EditWrapper isHidden={isEdit}>
            <CorrectButton onClick={handleCorrectButtonClick}>
              수정
            </CorrectButton>
            <Separator />
            <DeleteButton onClick={() => setModalState(true)}>
              삭제
            </DeleteButton>
          </EditWrapper>
        </HeaderContainer>
      </HeaderBackground>
      <div style={{ height: '60px' }} />
      {modalState && (
        <Modal
          handleConfirmButtonClick={handleDeleteButtonClick}
          handleCloseButtonClick={() => setModalState(false)}
        >
          정말로 이 게시물을 삭제하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default Header;
