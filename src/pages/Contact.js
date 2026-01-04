import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Alert
} from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        📧 Contact Page
      </Typography>
      <Typography variant="body1" paragraph>
        Get in touch with us!
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
          Contact Information:
        </Typography>
        <List sx={{ '& .MuiListItem-root': { py: 1 } }}>
          <ListItem disablePadding>
            <ListItemText
              primary="📧 Email: support@example.com"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="📱 Phone: +1 234 567 8900"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="🏢 Address: 123 Test Street, React City"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ListItem>
        </List>

        <Alert
          severity="success"
          sx={{ mt: 4 }}
          icon={<span style={{ fontSize: '1.25rem' }}>💬</span>}
        >
          <Typography variant="body2">
            <strong>Need help?</strong> Click the Crisp chat button to talk to support!
          </Typography>
        </Alert>
      </Box>
    </Container>
  );
}

export default Contact;
