import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import Box from 'Box';

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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
    <Box as="div" display="block" width="100%">
      <LinkBox>
        {' '}
        <LinkButton to={location.state?.from ?? '/movies'}>
          Back to all movies
        </LinkButton>
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
        <NavItem>Cast</NavItem>
        <NavItem>Reviews</NavItem>
      </MovieAdditional>
    </Box>
  );
};
