import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: var(--accent);
  color: var(--background);
  border: none;
  cursor: pointer;
`;

function Login() {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      login();
      navigate('/admin');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <LoginWrapper>
      <h2>Admin Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
