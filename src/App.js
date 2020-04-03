import React, { useState, useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  bodyContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [value, setValue] = useState(0);

  useEffect(() => {
    // window.location.reload();
  }, []);

  return (
    <div className={classes.bodyContainer} id='home' name='home'>
      <Navbar value={value} setValue={setValue} />
      <Container
        maxWidth='xl'
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
