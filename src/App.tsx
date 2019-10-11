import React from 'react';
import './App.css';

import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import NavBar from './components/NavBar'
import Profile from './containers/Profile/Profile'
//import { Route } from 'react-router'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App: React.FC = () => {
  return (
    
    <div>
      <Router>
        
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/register" component={Register} />  
          <Route path="/app" component={NavBar} />  
          <Route exact={true} path="/app/newsfeed" component={NewsFeed} /> 
          <Route exact={true} path="/app/profile" component={Profile} /> 
        
      </Router>
      
    </div>
  );
}

export default App;
