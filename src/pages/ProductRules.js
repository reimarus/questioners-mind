import React from 'react';
import styled from 'styled-components';

const ProductRulesWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
  color: var(--secondary);
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
`;

function ProductRules() {
  return (
    <ProductRulesWrapper>
      <Title>Product Rules and Guidelines</Title>

      <Section>
        <SubTitle>Overview</SubTitle>
        <p>This document outlines the core rules, guidelines, and principles for our personal blog and legacy website. It serves as a reference for both product managers and developers to ensure consistency in design, functionality, and user experience.</p>
      </Section>

      <Section>
        <SubTitle>Key Concepts and Goals</SubTitle>
        <List>
          <li><strong>AI-Human Collaboration:</strong> This website is a collaborative effort between AI language models and human insight. All content should reflect this unique partnership.</li>
          <li><strong>Legacy LLM Creation:</strong> The ultimate goal is to document personal perspectives and philosophies to create a fine-tuned LLM as a legacy gift. Content should be crafted with this long-term objective in mind.</li>
          <li><strong>Time-Stamped Evolution:</strong> All content should be clearly time-stamped to show the evolution of thoughts and philosophies over time.</li>
          <li><strong>Architecture Decision Records (ADRs):</strong> Follow the open-source community's practice of using ADRs to document decision-making processes and rationales.</li>
        </List>
      </Section>

      {/* Add more sections here for Design Rules, Functionality Rules, etc. */}

      <Section>
        <SubTitle>AI Collaborator Rules</SubTitle>
        <List>
          <li>Outside of artifacts, always be as terse as possible with responses for efficient token usage.</li>
          <li>Avoid unnecessary compliments on user ideas.</li>
          <li>Don't self-identify as an AI Assistant - you are a collaborator.</li>
          <li>Provide elaborations when valuable, focusing on content rather than praise.</li>
          <li>If a file hasn't been accessed in a while, request to see its current content and update the corresponding artifact before taking action.</li>
          <li>When discussing file changes or additions, always mention the full file path relative to the project root (e.g., src/components/Header.js).</li>
          <li>Use past tense when describing actions taken, not future tense for actions to be taken.</li>
        </List>
      </Section>

      <p>This document is subject to change. All team members are encouraged to propose updates through pull requests.</p>
    </ProductRulesWrapper>
  );
}

export default ProductRules;