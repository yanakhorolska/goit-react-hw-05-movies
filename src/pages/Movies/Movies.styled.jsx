import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: calc(100% / 4 - 30px);
  background-color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 20px 8px gray;
  }
`;
export const MovieTitle = styled('p')`
  font-size: 20px;
  text-decoration: none;
  color: white;
  text-align: center;
`;
export const MoviesForm = styled('form')`
  display: flex;
  gap: 20px;
  padding: 20px;
`;
export const MoviesInput = styled('input')`
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
`;
export const MoviesList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0;
  padding: 50px;
`;
export const MoviesItem = styled('li')``;
export const MoviesSearchButton = styled('button')`
  font-size: 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
  &:hover,
  focus {
    color: black;
    background-color: white;
  }
`;
