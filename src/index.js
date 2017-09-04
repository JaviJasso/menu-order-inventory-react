import React from  'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import StorePicker from './components/StorePicker'
import App from './components/App'





const Root = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route  path="/store/:storeId" component={App}/>
      </Switch>
    </BrowserRouter>
  )
}



ReactDOM.render(<Root/>, document.getElementById('root'));
