import React, {Component} from  'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/StorePicker'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<StorePicker />, document.getElementById('root'));
registerServiceWorker();
