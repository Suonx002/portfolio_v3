import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  experienceWithContainer: {
    // margin: '2rem 0'
  },
  gridItemMarginBottom: {
    marginBottom: '2rem'
  },
  cardContainer: {
    margin: '0.5rem',
    minWidth: 70,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
