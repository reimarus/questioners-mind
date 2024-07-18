import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/kitchen_counter.jpg';

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
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

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const KeyConcepts = styled.section`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-left: 4px solid var(--primary);
  margin-bottom: 2rem;
`;

const Highlight = styled.strong`
  color: var(--accent);
`;

function Home() {
  return (
    <HomeWrapper backgroundImage={backgroundImage}>
      <ContentWrapper>
        <KeyConcepts>
          <Title>Welcome to My Digital Legacy Project</Title>
          <p>This website is a unique collaboration between artificial intelligence and human insight. As you explore, you'll find a blend of AI-assisted content and my personal perspectives, creating a dynamic and evolving digital legacy.</p>
          
          <h3>Key Concepts:</h3>
          <ul>
            <li><Highlight>AI-Human Collaboration:</Highlight> This site is the result of a partnership between advanced AI language models and my own thoughts and experiences.</li>
            <li><Highlight>Legacy LLM Goal:</Highlight> The ultimate aim of this project is to document my perspectives on the world, creating a legacy gift for my children in the form of a fine-tuned Language Learning Model (LLM) based on my personal outlooks and philosophies.</li>
            <li><Highlight>Evolving Philosophies:</Highlight> My thoughts and beliefs are not static. Each piece of content is time-stamped, allowing you to see how my perspectives evolve as I learn and grow, synthesizing new information into updated heuristics.</li>
            <li><Highlight>Architecture Decision Records:</Highlight> Following best practices from the open-source community, I document my thought processes and decision-making using Architecture Decision Records (ADRs). This approach provides insight into not just what I think, but why and how those thoughts developed.</li>
          </ul>
          
          <p>As you navigate through this site, you'll find a rich tapestry of ideas, experiences, and insights. This is more than just a blog or a portfolio - it's a living document of a life's philosophy, powered by the synergy of human experience and artificial intelligence.</p>
        </KeyConcepts>

        <Section>
          <h2>Welcome to My Personal Website</h2>
          <p>This is where I share my thoughts, experiences, and leave a legacy for my children.</p>
        </Section>
      </ContentWrapper>
    </HomeWrapper>
  );
}

export default Home;