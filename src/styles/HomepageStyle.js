import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  gridItemMarginBottom: {
    marginBottom: '2rem'
  },
  infoText: {
    color: theme.palette.secondary.dark
  },
  webDeveloperIcon: {
    width: '100%'
  },
  aboutMeInfo: {
    marginTop: '0rem'
  },
  experienceWithContainer: {
    margin: '2rem 0'
  },
  cardContainer: {
    minWidth: 70,
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transform: 'scale(1.05)'
    }
  },
  svgIcon: {
    width: '100%',
    height: '100%'
  }
}));
