import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Theme from './Theme';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
