import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles/ShowcaseStyle';
import ShowcaseCard from './ShowcaseCard';

import portfolio_1 from '../assets/img/portfolio_1.png';
import portfolio_2 from '../assets/img/portfolio_2.png';
import portfolio_3 from '../assets/img/portfolio_3.png';

const projects = [
  {
    title: 'Testing 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit id aspernatur dolore quibusdam quo temporibus molestias qui, numquam atque iure est voluptates, voluptate consectetur',
    imageLink: portfolio_1,

    gifLink: 'google.com',
    liveDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    videoDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    source:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    techStacks: ['html5', 'css', 'javascript', 'react']
  },
  {
    title: 'Testing 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit id aspernatur dolore quibusdam quo temporibus molestias qui, numquam atque iure est voluptates, voluptate consectetur',
    imageLink: portfolio_2,
    gifLink: 'google.com',
    liveDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    videoDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    source:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    techStacks: ['html5', 'css', 'javascript', 'react']
  },
  {
    title: 'Testing 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit id aspernatur dolore quibusdam quo temporibus molestias qui, numquam atque iure est voluptates, voluptate consectetur',
    imageLink: portfolio_3,
    gifLink: 'google.com',
    liveDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    videoDemo:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    source:
      'https://www.pexels.com/photo/aerial-photo-of-cityscape-at-night-2362004/',
    techStacks: ['html5', 'css', 'javascript', 'react']
  }
];

const Showcase = () => {
  const classes = useStyles();

  return (
    <Grid
      id='portfolio'
      container
      direction='column'
      className={classes.showCaseContainerMargin}>
      <Grid item style={{ marginBottom: '2rem' }}>
        <Typography variant='h3'>Portfolio</Typography>
      </Grid>
      {/* portoflio container */}
      <Grid item container justify='center' alignItems='center'>
        {/* portfolio itself */}
        {projects.map(project => (
          <ShowcaseCard key={project.title} project={project} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Showcase;
