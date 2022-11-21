import { useState } from 'react';
import { fetchSearchApi } from 'components/fetchApi';
import { useSearchParams, useLocation } from 'react-router-dom';
import Box from 'Box';
import {
  MoviesForm,
  MoviesInput,
  MoviesList,
  MoviesSearchButton,
  MovieTitle,
  LinkItem,
} from './Movies.styled.jsx';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const inputParam = searchParams.get('filter') ?? '';
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    async function fetch() {
      try {
        const { results } = await fetchSearchApi(inputParam);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    }
    fetch();
  };
  const onChangeInput = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };
  if (!movies) {
    return null;
  }
  let posterPath;
  // for (const movie of movies) {
  //   if (movie.poster_path) {
  //     posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  //   } else {
  //     posterPath =
  //       'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
  //   }
  // }

  return (
    <Box display="block">
      <MoviesForm onSubmit={onSubmit}>
        <MoviesInput
          type="text"
          value={inputParam}
          name="input"
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <MoviesSearchButton type="submit">Search</MoviesSearchButton>
      </MoviesForm>
      {error && <p>{error}</p>}
      {movies && (
        <MoviesList>
          {movies.map(movie => {
            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            return (
              <LinkItem
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <img src={posterPath} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkItem>
            );
          })}
        </MoviesList>
      )}
    </Box>
  );
};
