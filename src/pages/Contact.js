import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--text-muted);
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--text-muted);
  border-radius: 4px;
  min-height: 150px;
`;

const Button = styled.button`
  background-color: var(--primary);
  color: var(--text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary);
  }
`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactWrapper>
  );
}

export default Contact;
