import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: var(--secondary);
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  &:hover {
    color: var(--accent);
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About Me</NavLink></NavItem>
        <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
        <NavItem><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
        <NavItem><NavLink to="/legacy">Legacy</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
        <NavItem><NavLink to="/product-rules">Product Rules</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;