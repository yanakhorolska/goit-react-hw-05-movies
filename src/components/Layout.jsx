import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';

export const Layout = () => {
  return (
    <div>
      <AppMenu />
      <Outlet />
    </div>
  );
};
