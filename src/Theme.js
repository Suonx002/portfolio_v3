import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#02203c';
const secondaryColor = '#fff';

export default createMuiTheme({
  palette: {
    common: {
      primaryColor,
      secondaryColor
    },
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: primaryColor
    },
    h2: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: secondaryColor,
      lineHeight: 1.5
    },
    h3: {
      fontSize: '2rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: secondaryColor,
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1.25rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      color: primaryColor
    },
    h5: {
      fontSize: '1.25rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      color: secondaryColor
    },
    h6: {
      fontSize: '1rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400
    },
    tab: {
      fontSize: '1rem',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      color: primaryColor,
      textTransform: 'none'
    }
  },
  overrides: {
    MuiCardActions: {
      root: {
        justifyContent: 'flex-end'
      }
    }
  }
});
