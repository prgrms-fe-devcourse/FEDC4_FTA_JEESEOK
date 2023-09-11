import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <div>
      <div>RootPage</div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default RootPage;
