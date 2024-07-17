import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #111827;
  color: #E5E7EB;
  padding: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Copyright>© {currentYear} Ryan Oskvarek. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

export default Footer;