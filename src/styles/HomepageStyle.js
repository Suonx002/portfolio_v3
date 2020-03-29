import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.4rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2.1rem'
    }
  },
  mainContainer: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    overflow: 'hidden'
  },
  gridItemMarginBottom: {
    marginBottom: '2rem'
  },
  infoText: {
    color: theme.palette.secondary.dark
  },
  webDeveloperIcon: {
    width: '100%'
  },
  aboutMeInfo: {
    marginTop: '0rem'
  },
  experienceWithContainer: {
    margin: '2rem 0'
  },
  cardContainer: {
    minWidth: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transform: 'scale(1.05)'
    }
  },
  svgIcon: {
    width: '100%',
    height: '100%'
  }
}));
