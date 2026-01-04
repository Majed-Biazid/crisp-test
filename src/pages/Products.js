import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function Products() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        🛍️ Products Page
      </Typography>
      <Typography variant="body1" paragraph>
        Browse our amazing products!
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Navigation:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2.5, mt: 2.5, flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            color="primary"
          >
            Products
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            color="primary"
          >
            About
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
          >
            Contact
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Product List:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Product A - $29.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Product B - $49.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Product C - $79.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Product D - $99.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default Products;
