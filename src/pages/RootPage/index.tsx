import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getAuthorizationCheckApi } from '~/api/authorization';
import { getUser } from '~/api/user';
import { User } from '~/types';
import Footer from './Footer';
import Header from './Header';

const RootPage = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const { pathname } = useLocation();
  const params = useParams();

  useEffect(() => {
    const getMyUserId = async () => {
      const user = (await getAuthorizationCheckApi()) as unknown as
        | User
        | false;

      if (user) setUserId(user._id);
    };

    getMyUserId();
  });

  useEffect(() => {
    const getUsername = async (userId: string | undefined) => {
      if (!userId) return;

      const user = (await getUser(userId)) as unknown as
        | (User & { username: string })
        | false;

      if (user) setUsername(user.username);
    };

    getUsername(params.userId);
  });

  return (
    <div>
      {['/', '/post'].includes(pathname) && <Header isSearch={true} />}
      {pathname === '/notification' && <Header />}
      {pathname.includes('/user') &&
        params.userId &&
        (params.userId !== userId ? (
          <Header title={username} isLogo={false} />
        ) : (
          <Header isLogout={true} />
        ))}
      <div style={{ height: '51px' }}></div>
      <Outlet />
      <Footer userId={userId} />
    </div>
  );
};

export default RootPage;
