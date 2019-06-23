import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createBrowserHistory } from 'history'
import './style/style.css';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render(<App history={history}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
