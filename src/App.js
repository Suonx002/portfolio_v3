import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
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
    <ScrollableAnchor id='home'>
      <div className={classes.bodyContainer}>
        <Navbar />
        <Container maxWidth='xl'>
          <Homepage />
          <AboutMe />
        </Container>
        <Footer />
      </div>
    </ScrollableAnchor>
  );
}

export default App;
