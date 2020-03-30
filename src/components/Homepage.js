import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grow from '@material-ui/core/Grow';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import useStyles from '../styles/HomepageStyle';
import webDeveloperIcon from '../assets/img/web_developer.svg';

const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grow
      in
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: matchesSM ? 0 : 1000,
        exit: matchesSM ? 0 : 1000
      }}>
      <div className={classes.mainContainer}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item container md={7} direction='column'>
            <Grid item>
              <Typography variant='h2'>I'm Vuthy Suon,</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h3' className={classes.infoText}>
                a full stack software developer based in Minneapolis, MN.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                color='secondary'
                size='large'
                className={classes.getInTouch}>
                Get In Touch
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={webDeveloperIcon}
              alt='web developer'
              className={classes.webDeveloperIcon}
            />
          </Grid>
        </Grid>
      </div>
    </Grow>
  );
};

export default Homepage;
