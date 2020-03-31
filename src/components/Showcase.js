import React, { useState } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles/ShowcaseStyle';

import ShowcaseCard from './ShowcaseCard';

import testingImage from '../assets/img/demo.jpeg';

const projects = [
  {
    title: 'Testing 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit id aspernatur dolore quibusdam quo temporibus molestias qui, numquam atque iure est voluptates, voluptate consectetur',
    imageLink: testingImage,
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
    imageLink: testingImage,
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
    imageLink: testingImage,
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
    <ScrollableAnchor id='portfolio'>
      <Grid
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
    </ScrollableAnchor>
  );
};

export default Showcase;
