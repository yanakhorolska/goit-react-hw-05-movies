import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';
import Box from 'Box';

export const Layout = () => {
  return (
    <>
      <Box as="header">
        <AppMenu />
      </Box>
      <Box as="main">
        <Outlet />
      </Box>
    </>
  );
};
