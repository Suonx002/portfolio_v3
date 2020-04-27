import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [value, setValue] = useState(0);

  useEffect(() => {
    ReactGA.initialize('UA-163583926-1');
    ReactGA.pageview('/');

    // window.location.reload();
  }, []);

  return (
    <div className={classes.bodyContainer} id='home' name='home'>
      <Helmet>
        <link rel='canonical' href='vuthysuon.com' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:image:secure_url' content='/landing_page.png' />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
      </Helmet>
      <Navbar value={value} setValue={setValue} />
      <Container
        maxWidth='lg'
        style={{ padding: matchesXS ? '1rem' : '0 2rem' }}>
        <Homepage />
        <AboutMe />
        <Showcase />
        <Contact setValue={setValue} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
