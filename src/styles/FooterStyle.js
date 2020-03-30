import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: '1rem 0.5'
  },
  buttonContainer: {
    color: theme.palette.secondary.dark,
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  icon: {
    fontSize: 30
  },
  builtBy: {
    color: theme.palette.secondary.dark
  }
}));
