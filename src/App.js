import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Blog from './pages/BlogHome';
import Portfolio from './pages/Portfolio';
import Legacy from './pages/Legacy';
import Contact from './pages/Contact';
import ProductRules from './pages/ProductRules';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NewBlogPost from './pages/NewBlogPost';
import NewPortfolioProject from './pages/NewPortfolioProject';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 2rem;
`;

function App() {
  return (
    <AuthProvider>
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
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product-rules" element={<ProductRules />} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/new-blog-post" element={<ProtectedRoute><NewBlogPost /></ProtectedRoute>} />
              <Route path="/new-portfolio-project" element={<ProtectedRoute><NewPortfolioProject /></ProtectedRoute>} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </Router>
    </AuthProvider>
  );
}

export default App;