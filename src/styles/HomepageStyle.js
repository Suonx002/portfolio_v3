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
  gridItemMarginBottom: {
    marginBottom: '2rem'
  },
  homepageContainer: {
    minHeight: 'calc(94vh - 2.5rem)',
    maxHeight: 'calc(94vh - 2.5rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  getInTouch: {
    textTransform: 'none'
  },
  infoText: {
    color: theme.palette.secondary.dark
  },
  webDeveloperContainer: {
    height: '100%'
  },
  webDeveloperIcon: {
    width: '100%'
  }
}));
