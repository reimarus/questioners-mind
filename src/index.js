import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2D3748;
    --secondary: #4A5568;
    --accent: #63B3ED;
    --background: #1A202C;
    --text: #E2E8F0;
    --text-muted: #A0AEC0;
  }

  body {
    margin: 0;
    font-family: 'Inter', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text);
  }
`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);