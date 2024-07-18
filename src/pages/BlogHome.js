import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHomeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary);
`;

const BlogPost = styled.article`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h3`
  a {
    color: var(--secondary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function BlogHome() {
  return (
    <BlogHomeWrapper>
      <Title>Latest Blog Posts</Title>
      <BlogPost>
        <BlogTitle>
          <Link to="/blog/okrs-llms">Enhancing OKR Quality in Business with LLMs: A Progressive Approach</Link>
        </BlogTitle>
        <p>Explore how Large Language Models (LLMs) can revolutionize the way businesses approach Objectives and Key Results (OKRs), providing interactive coaching and data-driven insights for more effective goal setting.</p>
      </BlogPost>

      <BlogPost>
        <BlogTitle>
          <Link to="/blog/information-flow">Molding Knowledge: How LLMs Transform Information Flow in Agile Teams</Link>
        </BlogTitle>
        <p>Discover how large language models are revolutionizing information flow in agile software development, turning rigid processes into a more fluid and adaptable approach. Explore the impact of LLMs on sprint planning, collaboration, and innovation in agile teams.</p>
      </BlogPost>

      <BlogPost>
        <BlogTitle>
          <Link to="/blog/llms-user-research">LLMs, Your User Research Best Friend</Link>
        </BlogTitle>
        <p>Discover how Large Language Models (LLMs) are transforming user research in product development. Learn about the benefits of automated transcription, centralized storage, and theme extraction in scaling your user research efforts.</p>
      </BlogPost>

      <BlogPost>
        <BlogTitle>
          <Link to="/blog/genai-transformation">The Transformation that Sticks: GenAI</Link>
        </BlogTitle>
        <p>Explore the revolutionary impact of Generative AI on business transformations. Unlike previous waves of change, GenAI promises to deliver more sustainable and dramatic improvements across various aspects of business operations.</p>
      </BlogPost>

      <BlogPost>
        <BlogTitle>
          <Link to="/blog/story-development">Agile Story Development with LLMs: A Game-Changer in Story Writing</Link>
        </BlogTitle>
        <p>Explore how Large Language Models (LLMs) are transforming Agile methodology, particularly in the realm of story development and requirement gathering. Learn about the symbiotic dance between Product Owners and LLMs in crafting comprehensive narratives for development teams.</p>
      </BlogPost>
    </BlogHomeWrapper>
  );
}

export default BlogHome;