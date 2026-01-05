import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import useCrisp from './hooks/useCrisp';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(270deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
`;

const HeaderToolbar = styled(Toolbar)`
  flex-direction: column;
  padding: 1.5rem;
`;

const AppTitle = styled(Typography)`
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const AppSubtitle = styled(Typography)`
  margin-top: 0.5rem;
  opacity: 0.9;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-bottom: 4rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(145deg, #f5f7fa 0%, #e4e8eb 100%);
  border-top: 1px solid #e0e0e0;
  padding: 1rem;
  text-align: center;
`;

const FooterText = styled(Typography)`
  color: #666;
  font-size: 0.875rem;
`;

function CrispWrapper() {
  useCrisp();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <StyledAppBar position="static">
          <HeaderToolbar>
            <AppTitle variant="h4" component="h1">
              🧪 Crisp Test App
            </AppTitle>
            <AppSubtitle variant="body2">
              Testing Crisp route tracking in React SPA
            </AppSubtitle>
          </HeaderToolbar>
        </StyledAppBar>

        <MainContent>
          <CrispWrapper />
        </MainContent>

        <Footer>
          <FooterText>
            Open browser console to see Crisp logs • Navigate to test route tracking
          </FooterText>
        </Footer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
