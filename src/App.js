import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  return (
    <div className={classes.bodyContainer} id='home'>
      <Navbar />
      <Container maxWidth='xl'>
        <Homepage />
        <AboutMe />
        <Showcase />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
