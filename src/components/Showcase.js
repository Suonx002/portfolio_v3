import React from 'react';
import LazyLoad from 'react-lazyload';

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
      'Disney Solo is a movie application that allows users to search for their favorite movies, watch trailers, now playing, discover trending films, etc.',
    longDescription: 'empty empty empty testing place',
    imageLink: portfolio_1,
    gifLink: '',
    liveDemo: 'https://disneysolo.netlify.com/',
    videoDemo: '',
    sourceCode: 'https://github.com/Suonx002/DisneySolo',
    techStacks: ['React', 'Redux', 'Sass'],
  },
  {
    title: 'WebResources',
    description:
      'Web Resources is an application that allows beginner and intermediate programmers to share learning resources such as online courses and tutorials.',
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
      'Node',
      'Material-UI',
      'Express',
      'MongoDB',
      'Mongoose',
    ],
  },
  {
    title: 'EntryLevel',
    description:
      'Entry Level is a career website that aggregates entry-level positions, benefiting students, career changers by optimizing the front end experience.',
    longDescription: 'empty empty empty testing place',
    imageLink: portfolio_3,
    gifLink: '',
    liveDemo: 'https://entrylevel.io/',
    videoDemo: '',
    sourceCode: '',
    techStacks: ['React', 'Context API', 'Semantic UI', 'PostgreSQL'],
  },
];

const Showcase = () => {
  const classes = useStyles();

  return (
    <div id='portfolio'>
      <LazyLoad height={200} offset={150}>
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
            {projects.map((project) => (
              <ShowcaseCard key={project.title} project={project} />
            ))}
          </Grid>
        </Grid>
      </LazyLoad>
    </div>
  );
};

export default Showcase;
