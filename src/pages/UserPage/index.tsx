import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '~/api/user';
import UserPhoto from '~/assets/user.svg';
import Image from '~/components/common/Image';
import PostCard from '~/pages/UserPage/PostCard';
import {
  IntroduceArea,
  MainContainer,
  MyInfoButtonContainer,
  NotificationCardContainer,
  UserInfoContainer,
} from '~/pages/UserPage/style';
import { Post, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';

/** userId값과 localStorage의 id 값과 비교 후 같다면 마이페이지를 보여주고 아니라면 유저 정보 페이지 보여주고 */

const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [isMyInfo, setIsMyInfo] = useState(true);
  const [postOrIntroduce, setPostOrIntroduce] = useState('post');
  const [userInfo, setUserInfo] = useState({
    mbti: '',
    introduce: '',
    image: '',
    username: '',
    posts: [] as Post[],
  });

  const storedUserInfo = localStorage.getItem('AUTH_TOKEN');

  const { user } = JSON.parse(storedUserInfo!);
  const { _id } = user;

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

    if (_id !== userId) setIsMyInfo(false);

    getUserInfo();
  }, [userId, _id]);

  const { mbti, introduce, image, username, posts } = userInfo;

  const handleEditButtonClick = () => {
    navigate('/user/edit');
  };

  const handleIntroduceButtonClick = () => {
    setPostOrIntroduce('introduce');
  };

  const handlePostButtonClick = () => {
    setPostOrIntroduce('post');
  };

  const handlePostCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/post/${e.currentTarget.id}`);
  };

  return (
    <MainContainer>
      <UserInfoContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Image
            src={image ? image : UserPhoto}
            shape={'circle'}
            width={150}
            height={150}
            mode={'cover'}
            style={{ backgroundColor: '#DFE7FF' }}
          />
          <span>{username}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span>{mbti}</span>
          </div>
          <div>
            <button
              style={
                isMyInfo
                  ? { display: 'block', width: '100%', height: '30px' }
                  : { display: 'none' }
              }
              onClick={handleEditButtonClick}
            >
              내 정보 수정
            </button>
          </div>
        </div>
      </UserInfoContainer>
      <MyInfoButtonContainer style={isMyInfo ? {} : { display: 'none' }}>
        <button style={{ width: '100%' }} onClick={handleIntroduceButtonClick}>
          내 소개
        </button>
        <button style={{ width: '100%' }} onClick={handlePostButtonClick}>
          게시글
        </button>
      </MyInfoButtonContainer>
      <NotificationCardContainer
        style={isMyInfo ? { display: 'block' } : { display: 'none' }}
      >
        {postOrIntroduce === 'post' && posts.length > 0
          ? posts.map((item, index) => {
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
          : introduce}
      </NotificationCardContainer>
      <IntroduceArea
        style={isMyInfo ? { display: 'none' } : { display: 'block' }}
      >
        {introduce}
      </IntroduceArea>
    </MainContainer>
  );
};

export default UserPage;
