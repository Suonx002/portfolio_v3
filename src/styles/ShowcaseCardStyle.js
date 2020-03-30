import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  gridContainerItem: {
    margin: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 1rem 0'
    }
  },
  cardContainer: {
    maxWidth: 650,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  mediaContainer: {
    height: 250,
    [theme.breakpoints.down('xs')]: {
      height: 200
    }
  },
  dialogContainer: {
    // maxWidth: 500
    // backgroundColor: theme.palette.primary.main
  },
  dialogImageContainer: {
    height: 250,
    width: '100%'
  },
  dialogTitle: {
    textAlign: 'center'
  },
  stack: {
    padding: 0
  },
  stackTitle: {
    ...theme.typography.h6,
    fontSize: '1.1rem'
  },
  techList: {
    display: 'flex',
    paddingLeft: '1rem',
    margin: 0
  },
  techItem: {
    marginRight: '1rem',
    padding: '0.5rem 0.5rem 0.5rem 0'
  },
  dialogButton: {
    textTransform: 'none'
  }
}));
