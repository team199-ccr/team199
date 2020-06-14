import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Homepage} from './pages'
import {Maps} from './components'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/teste-mapa">
          <Maps />
        </Route>
        <Route path="/">
          404
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
