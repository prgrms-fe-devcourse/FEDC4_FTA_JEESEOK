import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '~/api/user';
import UserPhoto from '~/assets/user.svg';
import Image from '~/components/common/Image';
import Tag from '~/components/common/Tag';
import {
  IntroduceArea,
  MainContainer,
} from '~/components/common/UserMainPage/style';

const UserPage = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState({
    mbti: '',
    introduce: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      if (userId) {
        const data = await getUser(userId);

        if (data && 'fullName' in data) {
          const { fullName } = data;
          const { mbti, introduce } = JSON.parse(fullName as string);

          setUserInfo({ mbti, introduce });
        }
      }
    };

    getUserInfo();
  }, [userId]);

  const { mbti, introduce } = userInfo;

  const tagProps = {
    width: '80px',
    height: '40px',
    borderWidth: '0',
    borderRadius: '12px',
    backgroundColor: '#DFE7FF',
    fontSize: '16px',
    fontColor: '#c78eff',
    borderColor: 'black',
  };

  return (
    <MainContainer>
      <Image
        src={UserPhoto}
        shape={'circle'}
        width={150}
        height={150}
        mode={'cover'}
        style={{ backgroundColor: '#DFE7FF' }}
      />
      <Tag {...tagProps} style={{ cursor: 'default' }}>
        {mbti}
      </Tag>
      <IntroduceArea>{introduce}</IntroduceArea>
    </MainContainer>
  );
};

export default UserPage;
