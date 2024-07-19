import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: var(--primary);
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: var(--text);
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  &:hover {
    color: var(--accent);
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">Ryan Oskvarek</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/legacy">Legacy</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/product-rules">Product Rules</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
