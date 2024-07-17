import React from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #E5E7EB;
`;

const Title = styled.h2`
  color: #00FFFF;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3`
  color: #9CA3AF;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: #065F46;
  color: #E5E7EB;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "GenAI Education Taskforce at Discover",
      description: "Led the initiative to educate and implement GenAI technologies across Discover Financial Services, fostering innovation and efficiency.",
      tags: ["AI", "Leadership", "Education", "Enterprise"]
    },
    {
      id: 2,
      title: "Global Contract Simplification at Travelport",
      description: "Spearheaded a cross-enterprise initiative to consolidate 42 localized contracts into a single global contract, streamlining processes and improving customer experience.",
      tags: ["Process Improvement", "Customer Experience", "Enterprise"]
    },
    // Add more projects as needed
  ];

  return (
    <PortfolioWrapper>
      <Title>My Projects</Title>
      {projects.map(project => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <p>{project.description}</p>
          <TagList>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagList>
        </ProjectCard>
      ))}
    </PortfolioWrapper>
  );
}

export default Portfolio;