import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  contactContainer: {
    marginBottom: '18rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '13rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '8rem'
    }
  },
  contactItem: {
    marginBottom: '2rem'
  },
  contactInfo: {
    color: theme.palette.secondary.dark,
    textAlign: 'center'
  },
  contactBtn: {
    textTransform: 'none',
    fontSize: 20
  },
  goBackHomeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem'
  },
  iconContainer: {
    backgroundColor: theme.palette.secondary.main,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      transform: 'translateY(-3px)'
    }
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 25
  }
}));
