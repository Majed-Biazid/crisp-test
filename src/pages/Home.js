import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        🏠 Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is a test app to verify Crisp route tracking in SPAs.
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

      <Paper sx={{ mt: 5, p: 2.5 }} elevation={0}>
        <Typography variant="h6" component="h3" gutterBottom>
          Testing Instructions:
        </Typography>
        <List component="ol" sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
            <ListItemText primary="Open browser console to see Crisp logs" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
            <ListItemText primary="Navigate between pages using the links above" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
            <ListItemText primary="Check that Crisp session data updates on each route change" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'decimal' }}>
            <ListItemText primary="Open Crisp chat and verify operators can see your navigation" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default Home;
