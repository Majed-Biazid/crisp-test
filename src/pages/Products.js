import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const PageContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const PageTitle = styled(Typography)`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    box-shadow: 0 4px 12px rgba(245, 87, 108, 0.4);
  }
`;

const ProductsSection = styled.div`
  margin-top: 2.5rem;
`;

const ProductCard = styled(ListItem)`
  background: linear-gradient(145deg, #fff5f5 0%, #ffe0e6 100%);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 2px 8px rgba(245, 87, 108, 0.2);
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

function Products() {
  return (
    <PageContainer maxWidth="md" css={fadeIn}>
      <PageTitle variant="h3" component="h1" gutterBottom>
        🛍️ Products Page
      </PageTitle>
      <Typography variant="body1" paragraph>
        Browse our amazing products!
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

      <ProductsSection>
        <Typography variant="h6" component="h3" gutterBottom>
          Product List:
        </Typography>
        <List>
          <ProductCard>
            <ListItemText
              primary="Product A - $29.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ProductCard>
          <ProductCard>
            <ListItemText
              primary="Product B - $49.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ProductCard>
          <ProductCard>
            <ListItemText
              primary="Product C - $79.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ProductCard>
          <ProductCard>
            <ListItemText
              primary="Product D - $99.99"
              primaryTypographyProps={{ fontSize: '1.125rem' }}
            />
          </ProductCard>
        </List>
      </ProductsSection>
    </PageContainer>
  );
}

export default Products;
