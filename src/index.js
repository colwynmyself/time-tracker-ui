import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import './styles/base.css';
import indexReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(
  combineReducers(indexReducer),
  compose(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(<Provider store={store}><App history={history} /></Provider>, document.getElementById('root'));
registerServiceWorker();
