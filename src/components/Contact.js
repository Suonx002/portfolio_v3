import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import useStyles from '../styles/ContactStyle';

const Contact = (props) => {
  const classes = useStyles();
  const { setValue } = props;

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
            I am currently looking for work opportunities. You can reach me via
            email or social media :)
          </Typography>
        </Grid>
        <Grid item className={classes.contactItem}>
          <Button
            role='button'
            aria-label='Email'
            rel='noopener noreferrer'
            href='mailto:admin@vuthysuon.com'
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
          role='button'
          aria-label='icon'
          size='medium'
          className={classes.iconContainer}
          color='secondary'
          onClick={() => {
            scroll.scrollToTop();
            setValue(0);
          }}>
          <ExpandLessIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
