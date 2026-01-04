import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Container,
  Typography,
  Button
} from '@mui/material';

const PageContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const PageTitle = styled(Typography)`
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
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
    box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);
  }
`;

const StorySection = styled.div`
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;
  border-left: 4px solid #38ef7d;
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

function About() {
  return (
    <PageContainer maxWidth="md" css={fadeIn}>
      <PageTitle variant="h3" component="h1" gutterBottom>
        ℹ️ About Page
      </PageTitle>
      <Typography variant="body1" paragraph>
        Learn more about our company and mission.
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

      <StorySection>
        <Typography variant="h6" component="h3" gutterBottom>
          Our Story:
        </Typography>
        <Typography variant="body1" paragraph>
          We are a company dedicated to testing Crisp integration with React SPAs.
          Our mission is to ensure that customer support agents can see accurate
          navigation data when users browse through different pages.
        </Typography>
      </StorySection>
    </PageContainer>
  );
}

export default About;
