import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'components/fetchApi';

import {
  MovieCard,
  MovieImg,
  MovieAbout,
  MovieTitle,
  MovieScore,
  MovieOverview,
  MovieOverviewText,
  MovieGenres,
  MovieGenresText,
  MovieAdditional,
  MovieAdditionalTitle,
  NavItem,
  LinkButton,
  LinkBox,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(Number(movieId)).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  let posterPath;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  } else {
    posterPath =
      'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
  }
  const { overview, title, release_date, genres, vote_average } = movie;
  return (
    <>
      <LinkBox>
        {' '}
        <LinkButton to={backLinkHref}>Back to all movies</LinkButton>
      </LinkBox>
      <MovieCard>
        <MovieImg src={posterPath} alt={title} />
        <MovieAbout>
          <MovieTitle>
            "{title}"({new Date(release_date).getFullYear()})
          </MovieTitle>
          <MovieScore>User Score: {Math.round(vote_average * 10)}%</MovieScore>
          <MovieOverview>Overview</MovieOverview>
          <MovieOverviewText>{overview}</MovieOverviewText>
          <MovieGenres>Genres</MovieGenres>
          <MovieGenresText>
            {genres.map(genre => genre.name).join(', ')}
          </MovieGenresText>
        </MovieAbout>
      </MovieCard>

      <MovieAdditional>
        <MovieAdditionalTitle>Additiona information</MovieAdditionalTitle>
        <NavItem to={'cast'} state={location.state}>
          Cast
        </NavItem>
        <NavItem to={'reviews'} state={location.state}>
          Reviews
        </NavItem>
      </MovieAdditional>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
