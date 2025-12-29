import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>ℹ️ About Page</h1>
      <p>Learn more about our company and mission.</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Navigation:</h2>
        <nav style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Our Story:</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
          We are a company dedicated to testing Crisp integration with React SPAs.
          Our mission is to ensure that customer support agents can see accurate
          navigation data when users browse through different pages.
        </p>
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

export default About;
