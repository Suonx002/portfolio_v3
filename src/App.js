import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.4rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2.1rem'
    }
  },
  mainContainer: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    overflow: 'hidden'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.mainContainer}>
        <Container style={{ marginTop: '5rem' }} maxWidth='xl'>
          <div className={classes.toolbarMargin} />

          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
