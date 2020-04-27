import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridItemMarginBottom: {
    marginBottom: '2rem',
  },
  homepageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: '3rem',
    // },
  },
  getInTouch: {
    textTransform: 'none',
    fontSize: 25,
  },
  infoText: {
    color: theme.palette.secondary.dark,
  },
  webDeveloperContainer: {
    overflow: 'hidden',
  },
  webDeveloperIcon: {
    width: '100%',
  },
}));
