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
    width: '100%',
    overflow: 'hidden'
  },
  getInTouch: {
    margin: '2rem 0'
  },
  infoText: {
    color: theme.palette.secondary.dark
  },
  webDeveloperIcon: {
    width: '100%'
  }
}));
