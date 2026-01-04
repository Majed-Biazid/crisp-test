import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button
} from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        ℹ️ About Page
      </Typography>
      <Typography variant="body1" paragraph>
        Learn more about our company and mission.
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
          Our Story:
        </Typography>
        <Typography variant="body1" paragraph>
          We are a company dedicated to testing Crisp integration with React SPAs.
          Our mission is to ensure that customer support agents can see accurate
          navigation data when users browse through different pages.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
