import React from 'react';
import {Header, MoviesList, MovieProfile} from 'blocks'
import {
  Switch,
  Route,
} from "react-router-dom";

import { ROUTES } from 'constants/routes'

function App() {
  return (
    <div className="app_wrapper">
      <div className="app">
        <Header/>
        <div className="container">
          <Switch>
            <Route
              exact
              path={ROUTES.HOME}
              component={MoviesList}
            />
            <Route
              exact
              path={ROUTES.MOVIE_ID(':id')}
              component={MovieProfile}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
