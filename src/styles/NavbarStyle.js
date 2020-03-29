import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2.5rem'
    }
  },
  appbar: {
    boxShadow: theme.shadows[1],
    padding: '0.5rem 0'
  },
  logoContainer: {
    height: 70,
    width: 70,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  rightMenu: {
    marginLeft: 'auto'
  },
  menuIcon: {
    color: theme.palette.common.white,
    fontSize: 50
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    minWidth: 10,
    marginLeft: '25px'
  },
  drawerContainer: {
    width: 200
  },
  drawerItem: {
    ...theme.typography.tab,

    opacity: '0.8'
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  listItem: {
    textAlign: 'center',
    color: theme.palette.primary.main
  }
}));
