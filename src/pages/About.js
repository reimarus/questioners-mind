import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #E5E7EB;
`;

const Title = styled.h2`
  color: #00FFFF;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

function About() {
  return (
    <AboutWrapper>
      <Title>About Ryan Oskvarek</Title>
      <Section>
        <h3>Professional Overview</h3>
        <p>Ryan Oskvarek is a seasoned Product Management Leader with a passion for innovation and a track record of delivering value in enterprise environments.</p>
      </Section>
      <Section>
        <h3>Key Strengths</h3>
        <ul>
          <li>Innovation Leadership</li>
          <li>Strategic Vision</li>
          <li>Team Building</li>
          <li>Adaptability</li>
        </ul>
      </Section>
      <Section>
        <h3>Approach to Product Management</h3>
        <p>Ryan's approach is characterized by a strong focus on customer value, data-driven decision making, cross-functional collaboration, and continuous learning.</p>
      </Section>
    </AboutWrapper>
  );
}

export default About;