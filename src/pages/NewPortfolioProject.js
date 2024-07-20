/* src/pages/NewBlogPost.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--primary);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  background-color: var(--secondary);
  color: var(--text);
  border: 1px solid var(--text-muted);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  background-color: var(--secondary);
  color: var(--text);
  border: 1px solid var(--text-muted);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--accent);
  color: var(--background);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--text);
  }
`;
import styled from 'styled-components';

const NewBlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend API
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
      />
      <Button type="submit">Create Post</Button>
    </Form>
  );
};

export default NewBlogPost;

*/
