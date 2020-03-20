import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Switch,
  Route,
} from "react-router-dom";

import {Header, MoviesList, MovieProfile} from 'blocks'
import {Loader} from "components";
import {ROUTES} from 'constants/routes'

function App(props) {
  return (
    <div className="app_wrapper">
      <div className="app">
        <Loader
          isShow={props.processingState}
        >
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
        </Loader>
      </div>
    </div>
  );
}

const mapStateToProps = ({
                           processingState
                         }) => ({processingState});

export default connect(mapStateToProps)(App);

App.propTypes = {
  processingState: PropTypes.bool,
};