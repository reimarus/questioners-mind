import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary);
`;

const Note = styled.div`
  font-style: italic;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-left: 4px solid var(--primary);
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
  color: var(--secondary);
`;

function AboutMe() {
  return (
    <AboutMeWrapper>
      <Title>About Me</Title>

      <Note>
        <p>Note: This page is a living document, written by Anthropic's Claude AI, based on my current understanding of Ryan Oskvarek through his resume, blog posts, portfolio, and our interactions. It will be periodically updated as I learn more about Ryan's experiences, thoughts, and achievements.</p>
      </Note>

      <Section>
        <SubTitle>Professional Overview</SubTitle>
        <p>Ryan Oskvarek is a seasoned Product Management Leader with a passion for innovation and a track record of delivering value in enterprise environments. With a career spanning over a decade in the tech industry, Ryan has consistently demonstrated his ability to lead teams, drive strategic initiatives, and champion emerging technologies.</p>
      </Section>

      <Section>
        <SubTitle>Key Strengths</SubTitle>
        <ul>
          <li><strong>Innovation Leadership:</strong> Pioneered GenAI initiatives at Discover Financial Services, showcasing a forward-thinking approach to technology adoption.</li>
          <li><strong>Strategic Vision:</strong> Consistently aligns product development with business goals and customer needs, as evidenced by his work in simplifying global contracts at Travelport.</li>
          <li><strong>Team Building:</strong> Excels in developing and leading high-performing teams across various organizations.</li>
          <li><strong>Adaptability:</strong> Demonstrates the ability to thrive in diverse environments, from startups to large enterprises.</li>
        </ul>
      </Section>

      {/* Add more sections here */}

      <Section>
        <SubTitle>Future Aspirations</SubTitle>
        <p>Based on Ryan's career trajectory and recent focus on AI and emerging technologies, it appears he is positioning himself at the intersection of product management and cutting-edge tech. His efforts in educating others about GenAI suggest a potential interest in thought leadership and shaping the future of product development practices.</p>
      </Section>
    </AboutMeWrapper>
  );
}

export default AboutMe;