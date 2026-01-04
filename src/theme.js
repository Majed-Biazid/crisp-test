import { createTheme } from '@mui/material/styles';

/**
 * Custom MUI theme matching the existing app colors
 *
 * Color palette derived from:
 * - Header: #282c34 (dark gray)
 * - Footer: #f8f9fa (light gray)
 * - Links: #007bff (blue)
 * - Accent boxes: #f0f0f0, #e8f5e9
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Blue from link buttons
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#282c34', // Dark header color
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f0f0f0', // Light gray for Paper components
    },
    text: {
      primary: '#000000',
      secondary: '#666666', // Footer text color
    },
    success: {
      light: '#e8f5e9', // Green box from Contact page
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5, // Match existing borderRadius
          textTransform: 'none', // Remove uppercase transformation
          padding: '10px 20px', // Match existing link button padding
          fontSize: '16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Clean look like current header
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '40px',
          paddingBottom: '40px',
        },
      },
    },
  },
});

export default theme;
