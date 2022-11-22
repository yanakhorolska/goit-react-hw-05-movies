import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() =>
  import('./Layout').then(module => ({
    ...module,
    default: module.Layout,
  }))
);

const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Review/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
