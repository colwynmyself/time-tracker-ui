import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { createBrowserHistory } from 'history';

import './styles/base.css';
import indexReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = createStore(
  ...indexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(<Provider store={store}><App history={history} /></Provider>, document.getElementById('root'));
registerServiceWorker();
