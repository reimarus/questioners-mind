import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1E3A8A;
  color: #E5E7EB;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Ryan Oskvarek</Title>
      <Subtitle>Personal Blog and Legacy</Subtitle>
    </HeaderWrapper>
  );
}

export default Header;