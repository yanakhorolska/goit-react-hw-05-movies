import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieCard = styled('div')`
  display: flex;
  padding: 20px;
  gap: 50px;
  justify-content: center;
  background-color: black;
`;
export const MovieImg = styled('img')`
  display: block;
`;
export const MovieAbout = styled('div')`
  padding: 20px;
  border: 2px solid black;
  width: 600px;
  background-color: white;
`;
export const MovieTitle = styled('h2')`
  text-align: center;
  font-size: 35px;
`;
export const MovieScore = styled('p')`
  font-size: 25px;
`;
export const MovieOverview = styled('h3')`
  font-size: 25px;
`;
export const MovieOverviewText = styled('p')`
  font-size: 20px;
`;
export const MovieGenres = styled('h3')`
  font-size: 25px;
`;
export const MovieGenresText = styled('p')`
  font-size: 25px;
`;
export const MovieAdditional = styled('div')`
  padding: 50px;
`;
export const MovieAdditionalTitle = styled('h3')`
  margin-top: 0;
  font-size: 25px;
`;
export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  &.active {
    border-radius: 5px;
    color: white;
    background-color: black;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  background-color: black;
`;
export const LinkBox = styled('div')`
  background-color: white;
  padding: 20px;
`;
