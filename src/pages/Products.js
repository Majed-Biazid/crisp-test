import { Link } from 'react-router-dom';

function Products() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🛍️ Products Page</h1>
      <p>Browse our amazing products!</p>

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
        <h3>Product List:</h3>
        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>Product A - $29.99</li>
          <li>Product B - $49.99</li>
          <li>Product C - $79.99</li>
          <li>Product D - $99.99</li>
        </ul>
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

export default Products;
