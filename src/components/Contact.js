import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import useStyles from '../styles/ContactStyle';

const Contact = () => {
  const classes = useStyles();
  return (
    <div id='contact'>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.contactContainer}>
        <Grid item className={classes.contactItem}>
          <Typography variant='h2'>Get In Touch</Typography>
        </Grid>
        <Grid item className={classes.contactItem} style={{ maxWidth: 450 }}>
          <Typography variant='body1' className={classes.contactInfo}>
            I am currently looking for work opportuniies. You can reach me
            through my email or social links!
          </Typography>
        </Grid>
        <Grid item className={classes.contactItem}>
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            className={classes.contactBtn}>
            Say Hello!
          </Button>
        </Grid>
      </Grid>
      <div className={classes.goBackHomeContainer}>
        <IconButton
          size='medium'
          className={classes.iconContainer}
          color='secondary'
          onClick={() => scroll.scrollToTop()}>
          <ExpandLessIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
