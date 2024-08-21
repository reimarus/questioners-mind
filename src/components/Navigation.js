import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, Navigate } from 'react-router-dom';



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

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;

function Navigation() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {isAdmin && <NavItem><NavLink to="/admin">Admin</NavLink></NavItem>}
      <Nav>
        <NavList>
          {/* Conditionally render the Admin link here */}
          {isAdmin && ( 
            <NavItem>
              <NavLink to="/admin">Admin</NavLink>
            </NavItem>
          )} 
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/about">About Me</NavLink></NavItem>
          <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
          <NavItem><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
          <NavItem><NavLink to="/legacy">Legacy</NavLink></NavItem>
          <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
          <NavItem><NavLink to="/product-rules">Product Rules</NavLink></NavItem>
          <NavItem><NavLink to="/admin">Admin</NavLink></NavItem>
          <NavItem><LogoutButton onClick={handleLogout}>Logout</LogoutButton></NavItem>
        </NavList>
      </Nav>
    </>
  );
}

function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="/new-blog-post">Create New Blog Post</Link>
      <Link to="/new-portfolio-project">Create New Portfolio Project</Link>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { isAdmin } = useAuth(); // Implement this hook
  return isAdmin ? children : <Navigate to="/login" />;
}


export default Navigation;