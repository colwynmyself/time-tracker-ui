import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import './styles/base.css';
import indexReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...indexReducer,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(historyMiddleware),
  ),
);

ReactDOM.render(<Provider store={store}><App history={history} /></Provider>, document.getElementById('root'));
registerServiceWorker();
