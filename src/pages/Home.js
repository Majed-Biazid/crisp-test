import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Container,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const PageContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const PageTitle = styled(Typography)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

const NavigationSection = styled.div`
  margin-top: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

const InstructionsCard = styled(Paper)`
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(145deg, #f5f7fa 0%, #e4e8eb 100%);
  border-radius: 12px;
`;

const fadeIn = css`
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Home() {
  return (
    <PageContainer maxWidth="md" css={fadeIn}>
      <PageTitle variant="h3" component="h1" gutterBottom>
        🏠 Home Page
      </PageTitle>
      <Typography variant="body1" paragraph>
        This is a test app to verify Crisp route tracking in SPAs.
      </Typography>

      <NavigationSection>
        <Typography variant="h5" component="h2" gutterBottom>
          Navigation:
        </Typography>
        <ButtonGroup>
          <StyledButton
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
          >
            Home
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to="/products"
            variant="contained"
            color="primary"
          >
            Products
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to="/about"
            variant="contained"
            color="primary"
          >
            About
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
          >
            Contact
          </StyledButton>
        </ButtonGroup>
      </NavigationSection>

      <InstructionsCard elevation={0}>
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
      </InstructionsCard>
    </PageContainer>
  );
}

export default Home;
