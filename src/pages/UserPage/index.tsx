import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '~/api/user';
import UserPhoto from '~/assets/user.svg';
import Image from '~/components/common/Image';
import Tag from '~/pages/UserPage/Tag';
import { IntroduceArea, MainContainer } from '~/pages/UserPage/style';
import { User } from '~/types';

const UserPage = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState({
    mbti: '',
    introduce: '',
    image: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      if (userId) {
        const data = (await getUser(userId)) as unknown as User | false;

        if (data) {
          const { fullName, image } = data;
          const { mbti, introduce } = JSON.parse(fullName);

          setUserInfo({ mbti, introduce, image });
        }
      }
    };

    getUserInfo();
  }, [userId]);

  const { mbti, introduce, image } = userInfo;

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
        src={image ? image : UserPhoto}
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
