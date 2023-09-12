import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { User } from '~/types';
import Footer from './Footer';
import Header from './Header';

const RootPage = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const user = (await getAuthorizationCheckApi()) as unknown as
        | User
        | false;

      if (user) setUserId(user._id);
    };

    getUser();
  });

  return (
    <div>
      <Header title="" isLogo={true} isSearch={true} />
      <div style={{ height: '51px' }}></div>
      <Outlet />
      <Footer userId={userId} />
    </div>
  );
};

export default RootPage;
