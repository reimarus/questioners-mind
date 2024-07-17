import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/kitchen_counter.jpg';

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #E5E7EB;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #00FFFF;
`;

function Home() {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <Title>Welcome to My Digital Legacy Project</Title>
        <Section>
          <p>This website is a unique collaboration between artificial intelligence and human insight. As you explore, you'll find a blend of AI-assisted content and my personal perspectives, creating a dynamic and evolving digital legacy.</p>
        </Section>
        <Section>
          <h3>Key Concepts:</h3>
          <ul>
            <li><Highlight>AI-Human Collaboration:</Highlight> This site is the result of a partnership between advanced AI language models and my own thoughts and experiences.</li>
            <li><Highlight>Legacy LLM Goal:</Highlight> The ultimate aim of this project is to document my perspectives on the world, creating a legacy gift for my children in the form of a fine-tuned Language Learning Model (LLM) based on my personal outlooks and philosophies.</li>
            <li><Highlight>Evolving Philosophies:</Highlight> My thoughts and beliefs are not static. Each piece of content is time-stamped, allowing you to see how my perspectives evolve as I learn and grow.</li>
            <li><Highlight>Architecture Decision Records:</Highlight> I document my thought processes and decision-making using Architecture Decision Records (ADRs), providing insight into not just what I think, but why and how those thoughts developed.</li>
          </ul>
        </Section>
        <Section>
          <p>As you navigate through this site, you'll find a rich tapestry of ideas, experiences, and insights. This is more than just a blog or a portfolio - it's a living document of a life's philosophy, powered by the synergy of human experience and artificial intelligence.</p>
        </Section>
      </ContentWrapper>
    </HomeWrapper>
  );
}

export default Home;