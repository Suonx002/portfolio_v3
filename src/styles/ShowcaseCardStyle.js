import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainerItem: {
    margin: '0 0.5rem 1rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 1rem 0',
    },
  },
  cardContainer: {
    // maxWidth: 600,
    overflow: 'hidden',

    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 1rem',
    },

    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  mediaContainer: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 350,
    },
    [theme.breakpoints.down('xs')]: {
      height: 250,
    },
  },
  dialogContainer: {
    // maxWidth: 500
    // backgroundColor: theme.palette.primary.main
  },
  dialogImageContainer: {
    height: 250,
    width: '100%',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  stack: {
    padding: 0,
  },
  stackTitle: {
    ...theme.typography.h6,
    fontSize: '1.1rem',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '1rem',
    margin: 0,
  },
  techItem: {
    marginRight: '1rem',
    padding: '0.5rem 0.5rem 0.5rem 0',
  },
  dialogActions: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  dialogButton: {
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      '&:not(:last-child)': {
        marginBottom: '0.5rem',
      },
    },
  },
}));
