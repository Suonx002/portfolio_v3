import React from 'react';

import { withStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';

import useStyles from '../styles/HomepageStyle';
import webDeveloperIcon from '../assets/img/web_developer.svg';
import sprite from '../assets/img/sprite.svg';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 13
  }
}))(Tooltip);

const icons = [
  {
    name: 'HTML5',
    link: 'html-5'
  },
  {
    name: 'CSS3',
    link: 'css3'
  },
  {
    name: 'Sass',
    link: 'sass'
  },
  {
    name: 'Material UI',
    link: 'material-ui'
  },
  {
    name: 'Javascript',
    link: 'javascript'
  },
  {
    name: 'React',
    link: 'react-native'
  },
  {
    name: 'Node',
    link: 'nodejs'
  },
  {
    name: 'MongoDB',
    link: 'mongodb'
  }
];

const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container justify='space-between' spacing={8}>
      <Slide
        direction='right'
        in
        mountOnEnter
        unmountOnExit
        timeout={{ enter: matchesSM ? 0 : 1000, exit: matchesSM ? 0 : 1000 }}>
        {/* introduction info*/}
        <Grid item container direction='column' md={6}>
          <Grid item className={classes.gridItemMarginBottom}>
            <Typography variant='h2'>I'm Vuthy Suon,</Typography>
            <Typography variant='h3' className={classes.infoText}>
              a full stack software developer based in Minneapolis, MN.
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={webDeveloperIcon}
              alt='web developer'
              className={classes.webDeveloperIcon}
            />
          </Grid>
        </Grid>
      </Slide>

      <Slide
        direction='left'
        in
        mountOnEnter
        unmountOnExit
        timeout={{ enter: matchesSM ? 0 : 1500, exit: matchesSM ? 0 : 1000 }}>
        {/* about me info */}
        <Grid
          item
          container
          direction='column'
          md={6}
          // alignItems='center'
          className={classes.aboutMeContainer}>
          <Grid item className={classes.gridItemMarginBottom}>
            <Typography variant='h3'>About Me</Typography>
          </Grid>
          <Grid item className={classes.aboutMeInfo}>
            <Typography variant='h6' className={classes.infoText}>
              Full stack software developer with a background in information
              technology infrastructure. Self-driven, adaptable learner, and
              constantly striving to learn and understand various programming
              technologies to build modern websites.
            </Typography>
          </Grid>
          <Grid item className={classes.experienceWithContainer}>
            <Typography variant='h3'>Experience With</Typography>
          </Grid>
          <Grid
            item
            container
            spacing={3}
            justify={'space-between'}
            style={{ padding: '1rem' }}>
            {icons.map((icon, index) => (
              <Grid item key={`${icon}-${index}`} xs={6} sm={3}>
                <Paper className={classes.cardContainer} elevation={3}>
                  <LightTooltip title={icon.name}>
                    <svg className={classes.svgIcon}>
                      <use href={`${sprite}#icon-${icon.link}`} />
                    </svg>
                  </LightTooltip>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Slide>
    </Grid>
  );
};

export default Homepage;
