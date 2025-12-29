import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import useCrisp from './hooks/useCrisp';
import './App.css';

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
      <div className="App">
        <header style={{
          background: '#282c34',
          padding: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1>🧪 Crisp Test App</h1>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>
            Testing Crisp route tracking in React SPA
          </p>
        </header>

        <CrispWrapper />

        <footer style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#f8f9fa',
          padding: '15px',
          textAlign: 'center',
          borderTop: '1px solid #ddd'
        }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            Open browser console to see Crisp logs • Navigate to test route tracking
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
