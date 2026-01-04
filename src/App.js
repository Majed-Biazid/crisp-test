import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import useCrisp from './hooks/useCrisp';

function CrispWrapper() {
  // Initialize Crisp and track route changes
  useCrisp();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <AppBar position="static" color="secondary">
          <Toolbar sx={{ flexDirection: 'column', py: 2 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
              🧪 Crisp Test App
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, opacity: 0.8 }}
            >
              Testing Crisp route tracking in React SPA
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content - grows to push footer down */}
        <Box component="main" sx={{ flexGrow: 1, pb: 8 }}>
          <CrispWrapper />
        </Box>

        {/* Footer - Fixed at bottom */}
        <Box
          component="footer"
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            py: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Open browser console to see Crisp logs • Navigate to test route tracking
          </Typography>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
