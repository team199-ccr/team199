import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Homepage, RestaurantCord, PageNotFound} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/verificar-comerciante/:id">
          <RestaurantCord/>
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
