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
    title: 'DisneySolo',
    description:
      'Disney Solo is a movie app for users to search for their favorite movies, watch trailers, and find most treading movies. ',
    longDescription: 'empty empty empty testing place',
    imageLink: portfolio_1,
    gifLink: '',
    liveDemo: 'https://disneysolo.netlify.com/',
    videoDemo: '',
    sourceCode: 'https://github.com/Suonx002/DisneySolo',
    techStacks: ['React', 'Redux', 'Sass']
  },
  {
    title: 'WebResources',
    description:
      'Web Resources is a web app targeting beginner to intermediate users to share their favorite online courses and tutorials.',
    longDescription: 'empty empty empty testing place',
    imageLink: portfolio_2,
    gifLink:
      'https://camo.githubusercontent.com/0ed64b605dfebd77030d6f6004d7a2ae0bc44217/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6858506b324e586f6444724f63396b454e792f67697068792e676966',
    liveDemo: 'https://webresources.herokuapp.com/',
    videoDemo: 'https://www.youtube.com/watch?v=pSWlTuGREMw&feature=youtu.be',
    sourceCode: 'https://github.com/Suonx002/WebResources',
    techStacks: [
      'React',
      'Redux',
      'Material-UI',
      'Node',
      'Express',
      'MongoDB',
      'Mongoose'
    ]
  },
  {
    title: 'EntryLevel',
    description:
      'Entry Level is a job aggregator for entry-level positions targeting interns, students, grads, career changers, and more.',
    longDescription: 'empty empty empty testing place',
    imageLink: portfolio_3,
    gifLink: '',
    liveDemo: 'https://entrylevel.io/',
    videoDemo: '',
    sourceCode: '',
    techStacks: ['React', 'Context API', 'Semantic UI', 'PostgreSQL']
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
