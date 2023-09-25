import { Outlet } from 'react-router-dom';
import Footer from '~/components/common/Footer';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
