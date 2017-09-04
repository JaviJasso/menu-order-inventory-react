import React, {Component} from  'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/StorePicker'
import App from './components/App'
import './css/style.css';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
