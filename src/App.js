import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Theme from './Theme';

import Navbar from './components/Navbar';

const home = () => {
  return <div>HOME PAGE</div>;
};

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
