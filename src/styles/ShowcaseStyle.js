import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  showCaseContainerMargin: {
    marginBottom: '20rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '15rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5rem'
    }
  }
}));
