import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  &.active {
    color: green;
  }
`;
export const Header = styled('div')`
  height: 50px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid black;
  box-shadow: 0px 1px 8px black;
  width: 100%;
`;

export const NavList = styled('ul')``;
