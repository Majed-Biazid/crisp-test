import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📧 Contact Page</h1>
      <p>Get in touch with us!</p>

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
        <h3>Contact Information:</h3>
        <ul style={{ fontSize: '16px', lineHeight: '2', listStyle: 'none', padding: 0 }}>
          <li>📧 Email: support@example.com</li>
          <li>📱 Phone: +1 234 567 8900</li>
          <li>🏢 Address: 123 Test Street, React City</li>
        </ul>

        <div style={{ marginTop: '30px', padding: '20px', background: '#e8f5e9', borderRadius: '8px' }}>
          <p><strong>💬 Need help?</strong> Click the Crisp chat button to talk to support!</p>
        </div>
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

export default Contact;
