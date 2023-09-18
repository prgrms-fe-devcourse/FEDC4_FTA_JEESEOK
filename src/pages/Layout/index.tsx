import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
