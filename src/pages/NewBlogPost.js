// src/pages/NewBlogPost.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, TextArea, Button } from '../components/StyledFormComponents';

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
