import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Checkout } from './components/Checkout';
import { FilmGrid } from './components/FilmGrid';
import { ShoppingCart } from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Header />
      <ShoppingCart />
      <Switch>
        <Route exact path='/'>
          <FilmGrid />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
