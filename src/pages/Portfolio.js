import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary);
`;

const PortfolioIntro = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 4px solid var(--primary);
`;

const ProjectArticle = styled.article`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3`
  a {
    color: var(--secondary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectTags = styled.div`
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

function Portfolio() {
  return (
    <PortfolioWrapper>
      <Title>My Portfolio</Title>

      <PortfolioIntro>
        <p>Welcome to my portfolio showcase. Here, you'll find a curated collection of projects that represent the pinnacle of my professional achievements and personal passions. These are the works I'm most proud of—each one a testament to my commitment to innovation, problem-solving, and value creation. Whether it's pioneering AI initiatives, streamlining global operations, or developing cutting-edge applications, these projects embody my dedication to excellence and my drive to make a lasting impact in the tech industry.</p>
      </PortfolioIntro>

      <ProjectArticle>
        <ProjectTitle>
          <Link to="/portfolio/genai-discover">GenAI Education Taskforce at Discover</Link>
        </ProjectTitle>
        <p>Led the initiative to educate and implement GenAI technologies across Discover Financial Services, fostering innovation and efficiency.</p>
        <ProjectTags>
          <Tag>AI</Tag>
          <Tag>Leadership</Tag>
          <Tag>Education</Tag>
          <Tag>Enterprise</Tag>
        </ProjectTags>
      </ProjectArticle>

      <ProjectArticle>
        <ProjectTitle>
          <Link to="/portfolio/global-contract-simplification">Global Contract Simplification at Travelport</Link>
        </ProjectTitle>
        <p>Spearheaded a cross-enterprise initiative to consolidate 42 localized contracts into a single global contract, streamlining processes and improving customer experience.</p>
        <ProjectTags>
          <Tag>Process Improvement</Tag>
          <Tag>Customer Experience</Tag>
          <Tag>Enterprise</Tag>
        </ProjectTags>
      </ProjectArticle>

      <ProjectArticle>
        <ProjectTitle>
          <Link to="/portfolio/iot-application-development">Cloud-based Industrial IoT Application at TrackX</Link>
        </ProjectTitle>
        <p>Built and led a development team working on a cutting-edge industrial IoT application, focusing on customer retention and system modernization.</p>
        <ProjectTags>
          <Tag>IoT</Tag>
          <Tag>Cloud</Tag>
          <Tag>Leadership</Tag>
          <Tag>Development</Tag>
        </ProjectTags>
      </ProjectArticle>
    </PortfolioWrapper>
  );
}

export default Portfolio;