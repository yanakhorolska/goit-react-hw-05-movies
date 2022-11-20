import axios from 'axios';

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendingApi = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  console.log(data);
  return data;
};
