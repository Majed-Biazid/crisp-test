import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Alert
} from '@mui/material';

const PageContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const PageTitle = styled(Typography)`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
    box-shadow: 0 4px 12px rgba(79, 172, 254, 0.4);
  }
`;

const ContactSection = styled.div`
  margin-top: 2.5rem;
`;

const ContactItem = styled(ListItem)`
  padding: 1rem;
  background: linear-gradient(145deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledAlert = styled(Alert)`
  margin-top: 2rem;
  background: linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;

  .MuiAlert-message {
    width: 100%;
  }
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

function Contact() {
  return (
    <PageContainer maxWidth="md" css={fadeIn}>
      <PageTitle variant="h3" component="h1" gutterBottom>
        📧 Contact Page
      </PageTitle>
      <Typography variant="body1" paragraph>
        Get in touch with us!
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

      <ContactSection>
        <Typography variant="h6" component="h3" gutterBottom>
          Contact Information:
        </Typography>
        <List>
          <ContactItem disablePadding>
            <ListItemText
              primary="📧 Email: support@example.com"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ContactItem>
          <ContactItem disablePadding>
            <ListItemText
              primary="📱 Phone: +1 234 567 8900"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ContactItem>
          <ContactItem disablePadding>
            <ListItemText
              primary="🏢 Address: 123 Test Street, React City"
              primaryTypographyProps={{ fontSize: '1rem' }}
            />
          </ContactItem>
        </List>

        <StyledAlert
          severity="success"
          icon={<span style={{ fontSize: '1.25rem' }}>💬</span>}
        >
          <Typography variant="body2">
            <strong>Need help?</strong> Click the Crisp chat button to talk to support!
          </Typography>
        </StyledAlert>
      </ContactSection>
    </PageContainer>
  );
}

export default Contact;
