import { fetchTrendingApi } from '../../components/fetchApi';
import { useState, useEffect } from 'react';
import Box from 'Box';
import {
  TrendingList,
  NavItem,
  NavTitle,
  TrendingTitle,
} from './Home.styled.jsx';

// import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function moviesFetch() {
      const { results } = await fetchTrendingApi();
      setTrendings(results);
      console.log(results);
    }
    moviesFetch();
  }, []);
  return (
    <Box as="div" display="block">
      <TrendingTitle>Trending movies</TrendingTitle>
      {trendings && (
        <TrendingList>
          {trendings.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
            }

            return (
              <NavItem key={movie.id}>
                <img src={posterPath} alt={movie.title} />
                <NavTitle>{movie.title}</NavTitle>
              </NavItem>
            );
          })}
        </TrendingList>
      )}
    </Box>
  );
};
