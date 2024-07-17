import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #E5E7EB;
`;

const Title = styled.h2`
  color: #00FFFF;
`;

const BlogPost = styled.article`
  margin-bottom: 2rem;
  border-bottom: 1px solid #065F46;
  padding-bottom: 1rem;
`;

const PostTitle = styled.h3`
  color: #9CA3AF;
`;

const PostMeta = styled.p`
  font-style: italic;
  color: #6B7280;
`;

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Revolutionizing Agile Story Development with LLMs",
      date: "2024-03-15",
      excerpt: "Explore how Large Language Models are transforming the landscape of Agile methodology..."
    },
    {
      id: 2,
      title: "The Transformation that Sticks: GenAI",
      date: "2024-03-01",
      excerpt: "Discover how Generative AI is ushering in a new era of transformation in enterprise companies..."
    }
    // Add more blog post objects as needed
  ];

  return (
    <BlogWrapper>
      <Title>Blog Posts</Title>
      {posts.map(post => (
        <BlogPost key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>Published on {post.date}</PostMeta>
          <p>{post.excerpt}</p>
        </BlogPost>
      ))}
    </BlogWrapper>
  );
}

export default Blog;