// import { lazy } from 'react';
import { Layout } from './Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
