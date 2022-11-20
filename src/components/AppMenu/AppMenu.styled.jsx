import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 25px;
  &.active {
    color: green;
  }
`;
export const Header = styled('div')`
  background-color: black;
  height: 50px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid black;

  width: 100%;
`;

export const NavList = styled('ul')`
  display: flex;
`;
