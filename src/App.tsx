import React from 'react';
import './App.css';

import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'

// import { Route } from 'react-router'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App: React.FC = () => {
  return (
    
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/register" component={Register} />  
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
