import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1E3A8A;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Ryan Oskvarek</h1>
      <p>Personal Blog and Legacy</p>
    </HeaderWrapper>
  );
}

export default Header;