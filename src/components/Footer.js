import React from 'react';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyles from '../styles/FooterStyle.js';

const icons = [
  {
    delay: '800',
    name: 'Github',
    link: 'https://github.com/Suonx002',
    icon: GitHubIcon,
  },
  {
    delay: '1000',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/suonx002/',
    icon: LinkedInIcon,
  },
];

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.mainContainer}
      justify='center'
      alignItems='center'>
      <Grid item container justify='center' alignItems='center'>
        {icons.map((item, index) => (
          <Grid
            item
            key={`${item}-${index}`}
            className={classes.itemContainer}
            data-aos='fade'
            data-aos-offset='0'
            data-aos-easing='ease-in-quart'
            data-aos-duration={item.delay}>
            <LightTooltip title={item.name}>
              <IconButton
                className={classes.buttonContainer}
                href={item.link}
                rel='noopener noreferrer'
                target='_blank'>
                <item.icon className={classes.icon} />
              </IconButton>
            </LightTooltip>
          </Grid>
        ))}
      </Grid>

      <Grid item>
        <Typography
          variant='h6'
          className={classes.builtBy}
          data-aos='fade'
          data-aos-offset='0'
          data-aos-easing='ease-in-quart'
          data-aos-duration='1200'>
          Designed and built by Vuthy Suon
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
