import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import Home from './containers/Home';
import Login from './containers/Login';

function App(props) {
  return (
    <div className="App">
      <ConnectedRouter history={props.history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </ConnectedRouter>
    </div>
  );
}

App.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.any,
    }),
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default App;
