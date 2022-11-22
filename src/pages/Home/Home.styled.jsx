import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingList = styled('ul')`
  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
export const NavItem = styled(NavLink)`
  width: calc(100% / 4 - 30px);
  background-color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 20px 8px gray;
  }
`;
export const NavTitle = styled('p')`
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 20px;
`;
export const TrendingTitle = styled('h1')`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
`;
