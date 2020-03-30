import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

import AboutMe from './components/AboutMe';

const useStyles = makeStyles(theme => ({
  bodyContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bodyContainer}>
      <Navbar />
      <Container>
        <Homepage />
        <AboutMe />
      </Container>
    </div>
  );
}

export default App;
