import React from 'react';
import LazyLoad from 'react-lazyload';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from '../styles/ShowcaseStyle';
import ShowcaseCard from './ShowcaseCard';

// import portfolio_1 from '../assets/img/portfolio_1.png';
// import portfolio_2 from '../assets/img/portfolio_2.png';
// import portfolio_3 from '../assets/img/portfolio_3.png';

const projects = [
  {
    delay: '500',
    title: 'Happy Nails Studio 2',
    description:
      'Happy Nails Studio 2 is a local nail salon located in Lebanon, PA. They are a small business that want their website live for customer to view their services.',
    // imageLink: portfolio_1,
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1591715337/resume/happy_nails_studio_2_jcmcbo.png',
    gifLink: '',
    liveDemo: 'https://happynailsstudio2.com/',
    videoDemo: '',
    sourceCode: 'https://github.com/Suonx002/happynails',
    techStacks: ['Material-UI', 'React', 'Next.js'],
  },
  {
    delay: '700',
    title: 'OmniVis',
    description:
      'OmniVis is a biotechnology company focused on user-centered disease detection devices. OmniVis makes handheld devices to rapidly detect for dangerous pathogens, anywhere in the world.',
    // imageLink: portfolio_1,
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1591715338/resume/omnivisTech_guhugb.png',
    gifLink: '',
    liveDemo: 'https://www.omnivistech.com/',
    videoDemo: '',
    sourceCode: '',
    techStacks: ['Html', 'Css', 'Javascript', 'Squarespace'],
  },
  {
    delay: '900',
    title: 'DisneySolo',
    description:
      'Disney Solo is a movie application that allows users to search for their favorite movies, watch trailers, now playing, discover trending films, etc.',
    // imageLink: portfolio_1,
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058820/resume/disney_solo.png',
    gifLink: '',
    liveDemo: 'https://disneysolo.netlify.com/',
    videoDemo: '',
    sourceCode: 'https://github.com/Suonx002/DisneySolo',
    techStacks: ['React', 'Redux', 'Sass'],
  },
  {
    delay: '500',
    title: 'DailyNews',
    description:
      'DailyNews has many news articles from different sources such as CNN, BuzzFeed, and ESPN. This application allow users to fetch top headlines articles.',
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1591715335/resume/dailyNews_yzhlkr.png',
    gifLink: '',
    liveDemo: '',
    videoDemo: 'https://www.youtube.com/watch?v=pVBFykvvu1w',
    sourceCode: 'https://github.com/Suonx002/dailyNews',
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
    delay: '700',
    title: 'WebResources',
    description:
      'Web Resources is an application that allows beginner and intermediate programmers to share learning resources such as online courses and tutorials.',
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058820/resume/web_resources.png',
    gifLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/v1589062359/resume/video.gif',
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
    delay: '900',
    title: 'EntryLevel',
    description:
      'Entry Level is a career website that aggregates entry-level positions, benefiting students, career changers by optimizing the front end experience.',
    // imageLink: portfolio_3,
    imageLink:
      'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058819/resume/entry_level.png',
    gifLink: '',
    liveDemo: 'https://entrylevel.io/',
    videoDemo: '',
    sourceCode: '',
    techStacks: ['React', 'Context API', 'Semantic UI', 'PostgreSQL'],
  },
];

const Showcase = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div id='portfolio'>
      <Grid
        container
        direction='column'
        className={classes.showCaseContainerMargin}>
        <Grid
          item
          style={{ marginBottom: '2rem' }}
          data-aos='fade'
          data-aos-offset='250'
          data-aos-easing='ease-in-quart'
          data-aos-duration='500'>
          <Typography variant='h3'>Portfolio</Typography>
        </Grid>
        {/* portoflio container */}

        <LazyLoad height={200} offset={matchesXS ? 75 : 150}>
          <Grid item container justify='center' alignItems='center'>
            {/* portfolio itself */}
            {projects.map((project) => (
              <ShowcaseCard
                key={project.title}
                project={project}
                style={{ padding: '0.5rem' }}
              />
            ))}
          </Grid>
        </LazyLoad>
      </Grid>
    </div>
  );
};

export default Showcase;
