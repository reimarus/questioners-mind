import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #065F46;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #E5E7EB;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #9CA3AF;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
        <NavItem><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;