import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '/components/header';
import Navigation from './components/navigation';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Navigation />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
