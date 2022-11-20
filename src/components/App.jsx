// import { lazy } from 'react';
import { Layout } from './Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
