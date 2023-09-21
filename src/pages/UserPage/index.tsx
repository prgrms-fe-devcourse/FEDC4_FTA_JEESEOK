import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '~/api/user';
import Header from '~/components/common/Header';
import Image from '~/components/common/Image';
import PostCard from '~/pages/UserPage/PostCard';
import TopNavBtn from '~/pages/UserPage/TopNavBtn';
import rocket from '~/pages/UserPage/assets/rocket.svg';
import spaceShip from '~/pages/UserPage/assets/spaceShip.svg';
import UserPhoto from '~/pages/UserPage/assets/user_2.svg';
import {
  EditInfoButtonContainer,
  ImageContainer,
  ImageNickNameContainer,
  Info,
  IntroduceArea,
  IntroduceAreaContainer,
  MainContainer,
  Mbti,
  MbtiContainer,
  MbtiEditInfoButtonContainer,
  MbtiImageContainer,
  MyInfoButtonContainer,
  NickName,
  NotExistPost,
  NotExistPostContainer,
  PostCardContainer,
  Separator,
  SeparatorWrapper,
  UserInfo,
  UserInfoContainer,
  UserPageContainer,
} from '~/pages/UserPage/style';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';

/** userId값과 localStorage의 id 값과 비교 후 같다면 마이페이지를 보여주고 아니라면 유저 정보 페이지 보여주고 */
interface InitUserInfo {
  mbti: string;
  introduce: string;
  image: string | undefined;
  username: string;
  posts: Post[];
}

const UserPage = () => {
  const [isMyInfo, setIsMyInfo] = useState(false);
  const [postOrIntroduce, setPostOrIntroduce] = useState('post');
  const [userInfo, setUserInfo] = useState<InitUserInfo>({
    mbti: '',
    introduce: '',
    image: '',
    username: '',
    posts: [] as Post[],
  });
  const [postIsActive, setPostIsActive] = useState(true);
  const [introduceIsActive, setIntroduceIsActive] = useState(false);

  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('AUTH_TOKEN');

    if (storedUserInfo) {
      const { user } = JSON.parse(storedUserInfo);
      const { _id } = user;

      if (_id === userId) setIsMyInfo(true);
    }
  }, [userId]);

  useEffect(() => {
    const getUserInfo = async () => {
      if (userId) {
        const data = (await getUser(userId)) as unknown as User | false;

        if (data) {
          const { fullName, image, username, posts } = data as User;
          const { mbti, introduce } = JSON.parse(fullName);

          setUserInfo({ mbti, introduce, image, username, posts });
        }
      }
    };

    getUserInfo();
  }, [userId]);

  const { mbti, introduce, image, username, posts } = userInfo;
  const handleEditButtonClick = () => {
    navigate('/user/edit');
  };

  const handleIntroduceButtonClick = () => {
    setIntroduceIsActive(true);
    setPostIsActive(false);

    setPostOrIntroduce('introduce');
  };

  const handlePostButtonClick = () => {
    setPostIsActive(true);
    setIntroduceIsActive(false);

    setPostOrIntroduce('post');
  };

  const handlePostCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/post/${e.currentTarget.id}`);
  };

  return (
    <UserPageContainer>
      {isMyInfo ? <Header isLogout /> : <Header isLogo={false} />}
      <MainContainer>
        <UserInfoContainer>
          <UserInfo isMyInfo={isMyInfo}>
            <Info>
              <ImageNickNameContainer>
                <ImageContainer>
                  <Image
                    src={image ? image : UserPhoto}
                    shape={'circle'}
                    width={100}
                    height={100}
                    mode={'cover'}
                    style={{ backgroundColor: '#DFE7FF' }}
                  />
                </ImageContainer>
                <NickName>{username}</NickName>
              </ImageNickNameContainer>

              <MbtiEditInfoButtonContainer isMyInfo={isMyInfo}>
                <MbtiContainer>
                  <MbtiImageContainer>
                    {mbti[2] === 'T' ? (
                      <img
                        src={spaceShip}
                        width={35}
                        height={35}
                        style={{
                          position: 'absolute',
                          bottom: 35,
                          left: 10,
                          zIndex: 1,
                        }}
                      />
                    ) : mbti[2] === 'F' ? (
                      <img
                        src={rocket}
                        width={45}
                        height={45}
                        style={{
                          position: 'absolute',
                          bottom: 27,
                          left: 5,
                          zIndex: 1,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </MbtiImageContainer>
                  {mbti.split('').map((char, index) => (
                    <Mbti char={char} idx={index} key={index}>
                      {char}
                    </Mbti>
                  ))}
                </MbtiContainer>

                <SeparatorWrapper>
                  <Separator />
                </SeparatorWrapper>

                <EditInfoButtonContainer>
                  <button
                    style={
                      isMyInfo
                        ? {
                            display: 'block',
                            width: '60%',
                            height: '30px',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#494984',
                            fontFamily: 'ONE-Mobile-Title',
                            fontSize: '14px',
                            backgroundColor: '#E4ECFE',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }
                        : { display: 'none' }
                    }
                    onClick={handleEditButtonClick}
                  >
                    내 정보 수정
                  </button>
                </EditInfoButtonContainer>
              </MbtiEditInfoButtonContainer>
            </Info>
            {isMyInfo ? (
              <></>
            ) : (
              <IntroduceArea isMyInfo={isMyInfo}>{introduce}</IntroduceArea>
            )}
          </UserInfo>
        </UserInfoContainer>

        <MyInfoButtonContainer style={isMyInfo ? {} : { display: 'none' }}>
          <TopNavBtn
            width={160}
            height={40}
            title={'게시글'}
            onClick={handlePostButtonClick}
            isActive={postIsActive}
          />
          <TopNavBtn
            width={160}
            height={40}
            title={'자기소개'}
            onClick={handleIntroduceButtonClick}
            isActive={introduceIsActive}
          />
        </MyInfoButtonContainer>

        <PostCardContainer style={isMyInfo ? {} : { display: 'none' }}>
          {postOrIntroduce === 'post' && posts.length === 0 ? (
            <NotExistPostContainer>
              <NotExistPost>{'작성한 게시물이 없습니다.'}</NotExistPost>
            </NotExistPostContainer>
          ) : postOrIntroduce === 'post' && posts.length > 0 ? (
            posts.map((item, index) => {
              return (
                <PostCard
                  _id={item._id}
                  title={JSON.parse(item.title).title}
                  channel={item.channel}
                  createdAt={getKoreaTimeFromNow(item.createdAt)}
                  likes={item.likes}
                  comments={item.comments}
                  key={index}
                  onClick={handlePostCardClick}
                />
              );
            })
          ) : postOrIntroduce === 'introduce' ? (
            <IntroduceAreaContainer isMyInfo={isMyInfo}>
              <IntroduceArea isMyInfo={isMyInfo}>{introduce}</IntroduceArea>
            </IntroduceAreaContainer>
          ) : (
            <></>
          )}
        </PostCardContainer>
      </MainContainer>
    </UserPageContainer>
  );
};

export default UserPage;
