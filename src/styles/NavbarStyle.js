import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
    // marginBottom: '1.4rem',
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: '1.6rem'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: '2.1rem'
    // }
  },
  resumeButton: {
    marginLeft: '25px',
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.dark}`,
    minWidth: 10,
    textTransform: 'none',
    fontSize: '1rem',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    zIndex: 2000,
    opacity: 0.95,

    '&:hover': {
      // color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`
    }
  },
  resumeItem: {
    ...theme.typography.tab,
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    ' &:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  appbar: {
    boxShadow: theme.shadows[0]
    // zIndex: theme.zIndex.drawer + 1
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
  closeContainer: {
    marginLeft: 'auto'
  },
  closeIcon: {
    color: theme.palette.primary.main,
    fontSize: 35
  },
  listItem: {
    textAlign: 'center',
    color: theme.palette.primary.main
  }
}));
