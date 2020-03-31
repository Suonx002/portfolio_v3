import React, { useState } from 'react';
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

  const [value, setValue] = useState(0);

  return (
    <div className={classes.bodyContainer} id='home' name='home'>
      <Navbar value={value} setValue={setValue} />
      <Container maxWidth='xl'>
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
