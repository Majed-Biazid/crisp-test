import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🏠 Home Page</h1>
      <p>This is a test app to verify Crisp route tracking in SPAs.</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Navigation:</h2>
        <nav style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Testing Instructions:</h3>
        <ol>
          <li>Open browser console to see Crisp logs</li>
          <li>Navigate between pages using the links above</li>
          <li>Check that Crisp session data updates on each route change</li>
          <li>Open Crisp chat and verify operators can see your navigation</li>
        </ol>
      </div>
    </div>
  );
}

const linkStyle = {
  padding: '10px 20px',
  background: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '16px'
};

export default Home;
