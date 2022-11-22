import { fetchTrendingApi } from '../../components/fetchApi';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

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
      try {
        const { results } = await fetchTrendingApi();
        if (results < 1) {
          Notiflix.Notify.warning("We can't find it, try again");
        }
        setTrendings(results);
      } catch {
        Notiflix.Notify.warning('Something wrong, try again please');
      }
    }
    moviesFetch();
  }, []);

  return (
    <>
      <TrendingTitle>Trending movies</TrendingTitle>
      {trendings && (
        <TrendingList>
          {trendings.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
            }

            return (
              <NavItem key={movie.id} to={`/movies/${movie.id}`}>
                <img src={posterPath} width="425" alt={movie.title} />
                <NavTitle>{movie.title}</NavTitle>
              </NavItem>
            );
          })}
        </TrendingList>
      )}
    </>
  );
};
