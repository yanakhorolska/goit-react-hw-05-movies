import { NavItem, Header, NavList } from './AppMenu.styled';

export const AppMenu = () => {
  return (
    <Header>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Movies</NavItem>
      </NavList>
    </Header>
  );
};
