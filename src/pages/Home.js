import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
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

const Highlight = styled.span`
  color: #9CA3AF;
  font-weight: bold;
`;

function Home() {
  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
}

export default Home;