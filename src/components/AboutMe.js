import React from 'react';
import LazyLoad from 'react-lazyload';

// import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import sprite from '../assets/img/sprite.svg';

import useStyles from '../styles/AboutMeStyle';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const icons = [
  {
    name: 'HTML5',
    link: 'html-5',
  },
  {
    name: 'CSS3',
    link: 'css3',
  },
  {
    name: 'Sass',
    link: 'sass',
  },
  {
    name: 'Material UI',
    link: 'material-ui',
  },
  {
    name: 'Javascript',
    link: 'javascript',
  },
  {
    name: 'React',
    link: 'react-native',
  },
  {
    name: 'Node',
    link: 'nodejs',
  },
  {
    name: 'MongoDB',
    link: 'mongodb',
  },
];

const AboutMe = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      id='aboutme'
      container
      justify='space-between'
      className={classes.aboutMeContainerMargin}>
      <Grid
        item
        container
        md={5}
        direction='column'
        className={classes.gridItemContainerMargin}>
        <Grid item className={classes.gridItemMarginBottom}>
          <Typography variant='h3'>About Me</Typography>
        </Grid>
        <Grid
          item
          className={classes.aboutMeInfo}
          style={{ marginBottom: '2rem' }}>
          <Typography variant='body1' className={classes.infoText}>
            Hello! I'm a web developer with a background in information
            technology infrastructure. Passionate, self-driven, adaptable
            learner, and constantly striving to learn various programming
            technologies to build professional and modern websites.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container md={6} direction='column'>
        <Grid item className={classes.gridItemMarginBottom}>
          <Typography variant='h3'>Experience With</Typography>
        </Grid>
        <Grid item container>
          <LazyLoad height={200} offset={150}>
            {icons.map((icon, index) => (
              <Grid item key={`${icon}-${index}`} xs={6} sm={3}>
                <Paper className={classes.cardContainer} elevation={2}>
                  <LightTooltip title={icon.name}>
                    <svg className={classes.svgIcon}>
                      <use href={`${sprite}#icon-${icon.link}`} />
                    </svg>
                  </LightTooltip>
                </Paper>
              </Grid>
            ))}
          </LazyLoad>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
