import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  cardContainer: {
    maxWidth: 550,
    color: theme.palette.primary.main
  },
  mediaContainer: {
    height: 200
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
