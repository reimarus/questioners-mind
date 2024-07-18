import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: var(--primary);
  color: var(--text);
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  font-style: italic;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Ryan Oskvarek</Title>
      <Subtitle className="accent">Personal Blog and Legacy</Subtitle>
    </HeaderWrapper>
  );
}

export default Header;