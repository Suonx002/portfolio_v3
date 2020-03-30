import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  aboutMeContainerMargin: {
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
  },
  gridItemContainerMargin: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem'
    }
  },
  gridItemMarginBottom: {
    marginBottom: '2rem'
  },
  cardContainer: {
    overflow: 'hidden',
    margin: '0.5rem',
    minWidth: 70,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.2s',

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      transform: 'scale(1.05)'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 200
    }
  },
  infoText: {
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem'
    }
  },
  svgIcon: {
    width: '100%',
    height: '100%'
  }
}));
