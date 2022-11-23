import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// Common Styles
export const LinkItem = styled(Link)`
  width: 400px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 40px;
  transition: scale 250ms linear, box-shadow 250ms linear;
  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 20px 8px gray;
  }
  &:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
`;
export const MoviesList = styled('div')`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const MovieTitle = styled('h2')`
  text-align: center;
  font-size: 25px;
  color: white;
`;
export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border: 2px solid black;
  background-color: black;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover,
  :focus {
    background-color: white;
    color: black;
  }
`;

// Movies Styles
export const MoviesSearchButton = styled('button')`
  font-size: 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover,
  focus {
    color: black;
    background-color: white;
  }
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

// HomeStyles
export const TrendingTitle = styled('h1')`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
`;
// MovieDetails
export const MovieDetailsAdditional = styled('div')`
  padding: 50px;
`;
export const MovieDetailsAdditionalTitle = styled('h3')`
  margin-top: 0;
  font-size: 25px;
`;
export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  transition: color 250ms linear, background-color 250ms linear;
  &:focus,
  :hover {
    color: white;
    background-color: black;
  }
  &.active {
    color: white;
    background-color: black;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const LinkBox = styled('div')`
  padding: 20px;
`;
// NotFound Styles

export const NotFoundBlock = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundText = styled('p')`
  font-size: 40px;
`;
export const NotFoundLink = styled(Link)``;
