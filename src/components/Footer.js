import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--secondary);
  color: var(--text);
  text-align: center;
  padding: 1rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Ryan Oskvarek. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;